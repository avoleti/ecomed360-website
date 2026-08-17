import React from 'react';
import * as THREE from 'three';

const particleVertexShader = `
  attribute float scale;
  attribute float seed;
  uniform float uTime;
  uniform float uPixelRatio;
  varying float vIntensity;
  varying float vSeed;
  varying float vDepthFade;

  void main() {
    vec3 p = position;
    float time = uTime * 0.16;

    p.y += sin(p.x * 0.62 + time) * 0.31;
    p.y += cos(p.z * 0.76 + time * 0.72) * 0.2;
    p.y += sin((p.x + p.z) * 0.36 - time * 0.48) * 0.1;
    p.x += sin(p.z * 0.42 + time * 0.36) * 0.055;

    vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
    float flare = step(0.982, seed);
    gl_PointSize = (scale * 18.0 + flare * 22.0) * uPixelRatio * (1.0 / max(1.0, -mvPosition.z));
    gl_Position = projectionMatrix * mvPosition;

    vIntensity = 0.52 + 0.48 * sin(p.x * 0.48 + p.z * 0.24 + time + seed * 2.5);
    vSeed = seed;
    float farFade = smoothstep(-5.7, -4.1, p.z);
    float nearFade = 1.0 - smoothstep(2.0, 5.45, p.z);
    vDepthFade = farFade * nearFade;
  }
`;

const particleFragmentShader = `
  precision highp float;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  varying float vIntensity;
  varying float vSeed;
  varying float vDepthFade;

  void main() {
    float distanceToCenter = length(gl_PointCoord - 0.5);
    float core = 1.0 - smoothstep(0.08, 0.48, distanceToCenter);
    float halo = 1.0 - smoothstep(0.0, 0.5, distanceToCenter);
    float flare = step(0.982, vSeed);
    float alpha = (core * (0.44 + vIntensity * 0.46) + halo * flare * 0.34) * vDepthFade;
    if (alpha < 0.015) discard;
    vec3 color = mix(uColorA, uColorB, clamp(vIntensity + flare * 0.25, 0.0, 1.0));
    gl_FragColor = vec4(color, alpha);
  }
`;

const mistParticleVertexShader = `
  precision highp float;
  attribute float scale;
  attribute float seed;
  uniform float uTime;
  uniform float uPixelRatio;
  varying float vMistAlpha;
  varying float vMistTone;

  void main() {
    vec3 p = position;
    float time = uTime * 0.16;

    float waveHeight = sin(p.x * 0.62 + time) * 0.31;
    waveHeight += cos(p.z * 0.76 + time * 0.72) * 0.2;
    waveHeight += sin((p.x + p.z) * 0.36 - time * 0.48) * 0.1;
    p.y += waveHeight + 0.025;
    p.x += sin(p.z * 0.42 + time * 0.36) * 0.055;

    float selected = step(0.82, seed);
    float crest = smoothstep(0.05, 0.46, waveHeight);
    float farFade = smoothstep(-5.7, -4.1, p.z);
    float nearFade = 1.0 - smoothstep(2.0, 5.45, p.z);
    float depthFade = farFade * nearFade;
    float shimmer = 0.74 + 0.26 * sin(p.x * 0.34 + p.z * 0.27 + time * 0.65 + seed * 5.0);

    vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
    float mistSize = (scale * 260.0 + seed * 130.0) * crest * shimmer;
    gl_PointSize = selected * mistSize * uPixelRatio / max(1.0, -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;

    vMistAlpha = selected * crest * depthFade * shimmer;
    vMistTone = clamp(crest * 0.72 + seed * 0.28, 0.0, 1.0);
  }
`;

const mistParticleFragmentShader = `
  precision highp float;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  varying float vMistAlpha;
  varying float vMistTone;

  void main() {
    vec2 centered = gl_PointCoord - 0.5;
    float radiusSquared = dot(centered, centered);
    float vapor = exp(-radiusSquared * 13.5);
    float core = exp(-radiusSquared * 32.0);
    float alpha = (vapor * 0.085 + core * 0.025) * vMistAlpha;
    if (alpha < 0.002) discard;
    vec3 color = mix(uColorA, uColorB, vMistTone);
    gl_FragColor = vec4(color, alpha);
  }
`;

function createParticleGeometry() {
  const gap = 0.075;
  const amountX = 240;
  const amountY = 150;
  const particleCount = amountX * amountY;
  const positions = new Float32Array(particleCount * 3);
  const scales = new Float32Array(particleCount);
  const seeds = new Float32Array(particleCount);
  let positionIndex = 0;
  let particleIndex = 0;

  for (let ix = 0; ix < amountX; ix += 1) {
    for (let iy = 0; iy < amountY; iy += 1) {
      positions[positionIndex] = ix * gap - (amountX * gap) / 2;
      positions[positionIndex + 1] = 0;
      positions[positionIndex + 2] = iy * gap - (amountY * gap) / 2;
      const seed = Math.abs(Math.sin(particleIndex * 12.9898 + 78.233) * 43758.5453) % 1;
      scales[particleIndex] = 0.74 + seed * 0.72;
      seeds[particleIndex] = seed;
      positionIndex += 3;
      particleIndex += 1;
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));
  geometry.setAttribute('seed', new THREE.BufferAttribute(seeds, 1));
  return { geometry, particleCount };
}

export function ParticleWaveField({ className = '' }) {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const stage = canvas?.parentElement;
    if (!canvas || !stage) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
      powerPreference: 'high-performance',
    });
    renderer.setClearColor(0x000000, 0);
    renderer.autoClear = false;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    const cameraBase = new THREE.Vector3(0, 1.95, 9.7);
    const cameraTarget = new THREE.Vector3(0, -1.08, -0.45);
    camera.position.copy(cameraBase);
    camera.lookAt(cameraTarget);

    const { geometry: particleGeometry, particleCount } = createParticleGeometry();
    const particleMaterial = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.AdditiveBlending,
      vertexShader: particleVertexShader,
      fragmentShader: particleFragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: 1 },
        uColorA: { value: new THREE.Vector3(0.0, 0.34, 0.75) },
        uColorB: { value: new THREE.Vector3(0.0, 0.86, 1.0) },
      },
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    particles.position.y = -4.0;
    particles.rotation.y = -0.035;
    particles.renderOrder = 1;
    scene.add(particles);

    const mistMaterial = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.AdditiveBlending,
      vertexShader: mistParticleVertexShader,
      fragmentShader: mistParticleFragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: 1 },
        uColorA: { value: new THREE.Vector3(0.0, 0.2, 0.52) },
        uColorB: { value: new THREE.Vector3(0.0, 0.68, 0.94) },
      },
    });
    const mistParticles = new THREE.Points(particleGeometry, mistMaterial);
    mistParticles.position.copy(particles.position);
    mistParticles.rotation.copy(particles.rotation);
    mistParticles.renderOrder = 0;
    scene.add(mistParticles);

    let disposed = false;
    let inView = false;
    let pageVisible = document.visibilityState === 'visible';
    let animationId = 0;
    let lastFrame = 0;
    let elapsed = 0;
    let lastTimestamp = performance.now();
    const frameInterval = 1000 / 30;
    const mouse = new THREE.Vector2(0, 0);

    const render = () => {
      particleMaterial.uniforms.uTime.value = elapsed;
      mistMaterial.uniforms.uTime.value = elapsed;
      camera.position.x += (mouse.x * 0.22 - camera.position.x) * 0.018;
      camera.position.y += (cameraBase.y + mouse.y * 0.1 - camera.position.y) * 0.018;
      camera.position.z = cameraBase.z;
      camera.lookAt(cameraTarget);

      renderer.clear();
      renderer.render(scene, camera);
    };

    const resize = () => {
      const rect = stage.getBoundingClientRect();
      const width = Math.max(1, Math.round(rect.width));
      const height = Math.max(1, Math.round(rect.height));
      const pixelRatio = Math.min(window.devicePixelRatio || 1, width > 1200 ? 0.9 : 1.15);
      renderer.setPixelRatio(pixelRatio);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      particleMaterial.uniforms.uPixelRatio.value = pixelRatio;
      mistMaterial.uniforms.uPixelRatio.value = pixelRatio;
      render();
    };

    const stopAnimation = () => {
      if (animationId) window.cancelAnimationFrame(animationId);
      animationId = 0;
      lastFrame = 0;
      canvas.dataset.animationActive = 'false';
    };

    const animate = (timestamp) => {
      animationId = 0;
      if (disposed || !inView || !pageVisible || reduceMotion) {
        stopAnimation();
        return;
      }

      const delta = Math.min(timestamp - lastTimestamp, 80);
      lastTimestamp = timestamp;
      elapsed += delta / 1000;
      if (!lastFrame || timestamp - lastFrame >= frameInterval) {
        render();
        lastFrame = timestamp;
      }
      animationId = window.requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      if (disposed || !inView || !pageVisible || reduceMotion || animationId) return;
      lastTimestamp = performance.now();
      canvas.dataset.animationActive = 'true';
      animationId = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleVisibilityChange = () => {
      pageVisible = document.visibilityState === 'visible';
      if (pageVisible && inView) startAnimation();
      else stopAnimation();
    };

    const resizeObserver = new ResizeObserver(resize);
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (inView) {
        render();
        startAnimation();
      } else {
        stopAnimation();
      }
    }, { threshold: 0.01 });

    resizeObserver.observe(stage);
    visibilityObserver.observe(canvas);
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);
    canvas.dataset.webglStatus = 'ready';
    canvas.dataset.animationActive = 'false';
    canvas.dataset.particleCount = String(particleCount);
    canvas.dataset.mistParticleCount = String(Math.round(particleCount * 0.18));
    resize();

    return () => {
      disposed = true;
      stopAnimation();
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      scene.remove(particles);
      scene.remove(mistParticles);
      particleGeometry.dispose();
      particleMaterial.dispose();
      mistMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`particle-wave-field ${className}`.trim()}
      aria-hidden="true"
    />
  );
}
