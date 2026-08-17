import React from 'react';
import ReactDOM from 'react-dom/client';
import * as d3 from 'd3';
import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  Check,
  ChartNoAxesCombined,
  ClipboardList,
  FlaskConical,
  Flower2,
  GraduationCap,
  Landmark,
  Menu,
  Pill,
  ScanLine,
  ShieldCheck,
  UsersRound,
  UserRound,
  X,
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import specializedGovernment from './assets/specialized-government.webp';
import specializedDefense from './assets/specialized-defense.webp';
import specializedTribal from './assets/specialized-tribal.webp';
import ecomedLogoWhite from './assets/ecomed360-primary-white.webp';
import upteamLogo from './assets/upteam-logo.webp';
import aboutTrademark from './assets/about-trademark.webp';
import teamEronHeard from './assets/team-eron-heard.webp';
import teamArunVoleti from './assets/team-arun-voleti.webp';
import teamRamonaBenjamin from './assets/team-ramona-benjamin.webp';
import teamRobertMiller from './assets/team-robert-miller.webp';
import teamAngelHarrison from './assets/team-angel-harrison.webp';
import teamAngeliqueNapoleon from './assets/team-angelique-napoleon.webp';
import teamWilliamEsslinger from './assets/team-william-esslinger.webp';
import partnerMma from './assets/partner-mma.webp';
import partnerCarahsoft from './assets/partner-carahsoft.webp';
import partnerIdme from './assets/partner-idme.webp';
import partnerRoux from './assets/partner-roux.webp';
import molecularNetwork from './assets/molecular-network.webp';
import moleculeRotationVideo from './assets/molecule-rotation-seamless.mp4';
import projectSagePhoto from './assets/sage-hero-supplied.webp';
import sageHandshake from './assets/sage-handshake.webp';
import sageEcomedLogo from './assets/sage-ecomed-primary-white.png';
import sageMmaatLogo from './assets/sage-mmaat-logo-alpha.webp';
import sageKeyhole from './assets/sage-keyhole-alpha.webp';
import sageCommunityNetwork from './assets/sage-community-network-transparent.png';
import connectedCareGlobe from './assets/connected-care-globe.png';
import './styles.css';

gsap.registerPlugin(ScrollTrigger);

const heroSteps = [
  {
    id: 'securely-connected',
    eyebrow: 'AI-READY DIGITAL HEALTH INFRASTRUCTURE',
    headline: [
      'The Future Won’t Be Stitched Together,',
      'It Will Be Securely Connected.',
    ],
    body: [
      'EcoMed 360 is a secure, AI-ready secure digital health infrastructure that connects fragmented healthcare data, systems, and workflows without requiring organizations to replace their existing technology investments.',
    ],
    layout: 'opening-split',
  },
  {
    id: 'connected-patient-picture',
    eyebrow: 'ONE CONNECTED HEALTH PICTURE',
    headline: [
      'One Platform.',
      'Every Record.',
      'One Connected',
      'Patient Picture.',
    ],
    body: [
      'Built on a Modular Open Systems Approach (MOSA), our secure digital data fabric integrates medical, behavioral health, dental, pharmacy, laboratory, imaging, claims, social determinants, and real-time biometric data into a unified longitudinal patient record.',
    ],
    primaryAction: { label: 'Talk to Our Team', href: '/contact#contact-form' },
    secondaryAction: { label: 'Email EcoMed 360', href: 'mailto:info@ecomed360.ai' },
    layout: 'closing-right',
  },
];

const platformFeatures = [
  {
    number: '01',
    title: 'Unified Records',
    description: 'One patient, one record across medical, dental, and behavioral health.',
  },
  {
    number: '02',
    title: 'Interoperable by Design',
    description: 'Connect EHRs, payers, and labs without costly custom integration.',
  },
  {
    number: '03',
    title: 'Security-First Architecture',
    description: 'End-to-end encryption, Zero Trust access controls, and continuous monitoring.',
  },
  {
    number: '04',
    title: 'AI-Assisted Care Coordination',
    description: 'Surface care gaps, risks, and next actions without another dashboard overload.',
  },
];

const patientDataSources = [
  {
    id: 'visits',
    title: 'Visits',
    panelLabel: 'Recent Visits',
    metric: '12 encounters',
    icon: CalendarDays,
    visual: 'chart',
  },
  {
    id: 'labs',
    title: 'Labs',
    panelLabel: 'Lab Results',
    metric: '48 results',
    icon: FlaskConical,
    visual: 'chart',
  },
  {
    id: 'imaging',
    title: 'Imaging',
    panelLabel: 'Imaging Studies',
    metric: '7 studies',
    icon: ScanLine,
    visual: 'scan',
  },
  {
    id: 'medications',
    title: 'Medications',
    panelLabel: 'Active Medications',
    metric: '8 active',
    icon: Pill,
    visual: 'lines',
  },
  {
    id: 'care-notes',
    title: 'Care Notes',
    panelLabel: 'Clinical Notes',
    metric: '23 notes',
    icon: ClipboardList,
    visual: 'lines',
  },
];

const audienceMission = {
  kicker: 'SECURE. CONNECTED. MISSION-READY.',
  title: 'Built for Every Healthcare Environment.',
  detail: 'EcoMed 360 connects fragmented systems, records, and workflows through one secure, interoperable platform—giving teams trusted, real-time intelligence across commercial healthcare, government health, and defense operations.',
  capabilities: [
    'MOSA Interoperability',
    'Zero Trust Security',
    'Unified Patient Record',
    'Real-Time Clinical Intelligence',
  ],
};

const audienceOptions = [
  {
    id: 'defense-grade',
    label: 'Defense-Grade. Healthcare-Ready.',
    title: 'Mission-Critical Security. One Connected Health Picture.',
    detail: 'Born from zero-trust cybersecurity architecture engineered for the U.S. Air Force F-22 Raptor program, EcoMed 360 unifies fragmented health data into a secure, real-time Medical Common Operational Picture without replacing existing EHRs.',
  },
  {
    id: 'government-defense',
    label: 'Government & Defense',
    title: 'One Secure Health Picture. From the Tactical Edge to Enterprise Command.',
    detail: 'EcoMed 360 connects fragmented military, federal, and public health data into a real-time Medical Common Operational Picture—without replacing existing systems. MOSA-aligned, Zero Trust, and DDIL-ready, the platform delivers trusted intelligence wherever the mission operates.',
  },
  {
    id: 'government-health',
    label: 'Government Health',
    title: 'One Patient. One Trusted Record. Across Every System of Care.',
    detail: 'EcoMed 360 securely connects federal and community health records into a real-time Medical Common Operational Picture, giving care teams a unified longitudinal view as patients move across systems, providers, and settings. Our MOSA-based, Zero Trust platform strengthens continuity without replacing existing infrastructure.',
  },
  {
    id: 'commercial-healthcare',
    label: 'Commercial Healthcare',
    title: 'One Connected View. Across Every Care Environment.',
    detail: 'EcoMed 360 connects fragmented data, systems, and workflows across hospitals, health systems, behavioral health, dental practices, emergency medical services, and ambulatory care—without replacing existing technology. MEDCOP delivers a secure, real-time operational picture on large displays and mobile tablets, giving care teams the insight they need wherever care happens.',
  },
];

const specializedSolutions = [
  {
    id: 'government-health',
    title: 'Government Health',
    description: 'Connect federal and community healthcare records into one trusted patient picture.',
    image: specializedGovernment,
    icon: Landmark,
    imagePosition: 'center 51%',
  },
  {
    id: 'operational-medicine',
    title: 'Defense & Operational Medicine',
    description: 'Provide secure medical visibility from the tactical edge to enterprise command.',
    image: specializedDefense,
    icon: ShieldCheck,
    imagePosition: 'center 46%',
  },
  {
    id: 'tribal-health',
    title: 'Tribal Health',
    description: 'Support governed interoperability and continuity across Tribal and external healthcare environments.',
    image: specializedTribal,
    icon: Flower2,
    imagePosition: 'center 49%',
  },
];

const leadershipTeam = [
  { id: 'eron-heard', name: 'Eron Heard', role: 'Founder, CEO & Board Member', image: teamEronHeard, linkedin: 'https://www.linkedin.com/in/eronheard/' },
  { id: 'arun-voleti', name: 'Arun Voleti', role: 'Co-Founder & Chief Technology Officer', image: teamArunVoleti, linkedin: 'https://www.linkedin.com/in/vvarunkumar/' },
  { id: 'ramona-benjamin', name: 'Ramona Benjamin', role: 'Chief Financial Officer', image: teamAngeliqueNapoleon, linkedin: 'https://www.linkedin.com/in/ramona-benjamin-7abaa016/' },
  { id: 'robert-miller', name: 'Robert G. Miller', role: 'VP, Compliance & Process Integration', image: teamRobertMiller, linkedin: 'https://www.linkedin.com/in/robertgmiller/' },
  { id: 'angel-harrison', name: 'Angel Harrison, DHSc, MPH', role: 'Director, Clinical Systems Integration & Analytics', image: teamAngelHarrison, linkedin: 'https://www.linkedin.com/in/angel-harrison-mph/' },
  { id: 'angelique-napoleon', name: 'Angelique Napoleon', role: 'Deputy CISO Advisor', image: teamRamonaBenjamin, linkedin: 'https://www.linkedin.com/in/angelique-q-napoleon-7b67977/' },
  { id: 'william-esslinger', name: 'William Esslinger', role: 'In-House Counsel', image: teamWilliamEsslinger, linkedin: 'https://www.linkedin.com/in/wgejr/' },
];

const partnershipLogos = [
  { name: 'Carahsoft', image: partnerCarahsoft, width: 236, height: 47 },
  { name: 'ID.me', image: partnerIdme, width: 184, height: 68 },
  { name: 'The Roux Institute at Northeastern University', image: partnerRoux, width: 537, height: 105 },
  { name: 'MMA Enterprises Inc.', image: partnerMma, width: 455, height: 201 },
];

const globeCountriesUrl = 'https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/110m/cultural/ne_110m_admin_0_countries.json';
const globeStatesUrl = 'https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json';
const highlightedCountries = new Set(['Canada', 'Mexico', 'United States of America']);
const CONTACT_EMAIL = 'info@ecomed360.ai';
const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/ecomed360.ai/', icon: 'instagram' },
  { label: 'Facebook', href: 'https://www.facebook.com/ecomed360.ai/', icon: 'facebook' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/ecomed-360-inc/', icon: 'linkedin' },
];

function Brand({ activePage = 'home' }) {
  return (
      <a className="brand" href={activePage === 'home' ? '#top' : '/'} aria-label="EcoMed360 home" translate="no">
      <img className="brand-logo" src={ecomedLogoWhite} alt="EcoMed360" width="640" height="118" decoding="async" />
    </a>
  );
}

function ActionButton({ action, primary = false }) {
  return (
    <a className={`action ${primary ? 'action-primary' : 'action-secondary'}`} href={action.href} data-magnetic>
      <span>{action.label}</span>
      <span className="action-icon" aria-hidden="true"><ArrowRight size={21} strokeWidth={1.7} /></span>
    </a>
  );
}

function Navigation({ activePage = 'home' }) {
  const [open, setOpen] = React.useState(false);
  const [mobile, setMobile] = React.useState(() => window.matchMedia('(max-width: 820px)').matches);

  React.useEffect(() => {
    const query = window.matchMedia('(max-width: 820px)');
    const update = () => setMobile(query.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  React.useEffect(() => {
    document.body.classList.toggle('nav-open', mobile && open);
    return () => document.body.classList.remove('nav-open');
  }, [mobile, open]);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Brand activePage={activePage} />
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
        >
          {open ? <X /> : <Menu />}
        </button>
        <div className={`nav-content ${open ? 'is-open' : ''}`} id="site-menu" inert={mobile && !open ? true : undefined}>
          <nav aria-label="Primary navigation" onClick={() => setOpen(false)}>
            <a className={activePage === 'home' ? 'active' : ''} href={activePage === 'home' ? '#top' : '/'}>Home</a>
            <a className={activePage === 'about' ? 'active' : ''} href={activePage === 'about' ? '#about-top' : '/about#about-top'}>About Us</a>
            <a href={activePage === 'home' ? '#leadership' : '/#leadership'}>Team</a>
            <a href={activePage === 'home' ? '#data-fabric' : '/#data-fabric'}>Journey</a>
            <a href={activePage === 'home' ? '#specialized-solutions' : '/#specialized-solutions'}>Solution</a>
            <a href={activePage === 'home' ? '#partnerships' : '/#partnerships'}>Partners</a>
            <a className={activePage === 'sage' ? 'active' : ''} href={activePage === 'sage' ? '#sage-top' : '/sage'} aria-label="Project Sage">Project Sage</a>
          </nav>
          <ActionButton primary action={{ label: 'Schedule a Consultation', href: activePage === 'contact' ? '#contact-form' : '/contact#contact-form' }} />
        </div>
      </div>
    </header>
  );
}

function SocialIcon({ name }) {
  if (name === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle className="social-icon-dot" cx="17.5" cy="6.5" r="1" />
      </svg>
    );
  }

  if (name === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M14.5 22v-8h2.9l.9-4h-3.8V7.6c0-1.1.5-1.8 1.8-1.8h2.2V2.2c-.6-.1-1.5-.2-2.6-.2-3.2 0-5.4 2-5.4 5.7V10H7v4h3.5v8h4Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M5.5 8.5H2V21h3.5V8.5ZM3.75 3a2.05 2.05 0 1 0 0 4.1 2.05 2.05 0 0 0 0-4.1ZM8 8.5h3.4v1.7h.05C11.95 9.1 13.3 8 15.4 8c3.55 0 4.2 2.34 4.2 5.38V21h-3.5v-6.75c0-1.61-.03-3.68-2.24-3.68-2.24 0-2.58 1.75-2.58 3.56V21H8V8.5Z" />
    </svg>
  );
}

function SiteFooter({ activePage = 'home' }) {
  return (
    <footer className="contact-footer site-footer">
      <div className="contact-footer-brand">
        <Brand activePage={activePage} />
        <p>One platform. Every record. One connected patient picture.</p>
        <div className="contact-footer-credit">
          <span>Designed &amp; developed by</span>
          <a href="https://upteamagency.com" target="_blank" rel="noreferrer" aria-label="Upteam Agency">
            <img src={upteamLogo} alt="Upteam" width="1248" height="360" loading="lazy" decoding="async" />
          </a>
        </div>
      </div>
      <div className="contact-footer-group">
        <p>PLATFORM</p>
        <a href={activePage === 'home' ? '#platform' : '/#platform'}>Overview</a>
        <a href={activePage === 'home' ? '#solutions' : '/#solutions'}>Solutions</a>
        <a href={activePage === 'home' ? '#data-fabric' : '/#data-fabric'}>Integrations</a>
      </div>
      <div className="contact-footer-group">
        <p>RESOURCES</p>
        <a href={activePage === 'home' ? '#leadership' : '/#leadership'}>Leadership</a>
        <a href="/about#about-mission">Our Mission</a>
        <a href={activePage === 'contact' ? '#contact-form' : '/contact#contact-form'}>Contact</a>
      </div>
      <div className="contact-footer-group contact-footer-company">
        <p>COMPANY</p>
        <a href="/about">About</a>
        <a href="/about#about-mission">Mission</a>
        <a href={activePage === 'contact' ? '#contact-form' : '/contact#contact-form'}>Contact</a>
      </div>
      <div className="contact-footer-note">
        <strong>SECURE. CONNECTED. WITHIN REACH.</strong>
        <a className="contact-footer-email" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        <div className="site-footer-socials" aria-label="Social media">
          {SOCIAL_LINKS.map((social) => (
            <a
              className="site-footer-social"
              href={social.href}
              key={social.label}
              aria-label={social.label}
              target="_blank"
              rel="noreferrer"
            >
              <SocialIcon name={social.icon} />
            </a>
          ))}
        </div>
        <span>© 2025 EcoMed 360°. All rights reserved.</span>
      </div>
    </footer>
  );
}

function Headline({ lines }) {
  return (
    <h1>
      {lines.map((line) => <span className="headline-line" key={line}>{line}</span>)}
    </h1>
  );
}

function HeroScene({ step, index, active, sceneRef, headlineRef, copyRef }) {
  const compactLayout = window.matchMedia('(max-width: 820px)').matches;
  const actions = step.primaryAction && (
    <div className="actions">
      <ActionButton primary action={step.primaryAction} />
      <ActionButton action={step.secondaryAction} />
    </div>
  );

  return (
    <article
      ref={sceneRef}
      className={`hero-step scene-${index + 1} ${step.layout} ${active ? 'is-active' : ''}`}
      aria-hidden={compactLayout ? undefined : !active}
      inert={compactLayout ? undefined : active ? undefined : true}
    >
      {step.layout === 'opening-split' ? (
        <div className="opening-grid">
          <div className="opening-headline" ref={headlineRef}>
            <p className="eyebrow">{step.eyebrow}</p>
            <Headline lines={step.headline} />
          </div>
          <div className="opening-copy body-copy" ref={copyRef}>
            {step.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      ) : (
        <div className="closing-content">
          <p className="eyebrow">{step.eyebrow}</p>
          <Headline lines={step.headline} />
          <div className="body-copy">
            {step.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          {actions}
        </div>
      )}
    </article>
  );
}

function PlatformSection() {
  const [activeNumber, setActiveNumber] = React.useState(platformFeatures[0].number);
  const detailRef = React.useRef(null);
  const tabRefs = React.useRef([]);
  const activeFeature = platformFeatures.find((feature) => feature.number === activeNumber);

  React.useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const compactLayout = window.matchMedia('(max-width: 820px)').matches;
    if (reduceMotion || compactLayout || !detailRef.current) return undefined;

    const context = gsap.context(() => {
      gsap.fromTo(
        detailRef.current.children,
        { yPercent: 72 },
        { yPercent: 0, duration: 0.62, stagger: 0.06, ease: 'power3.out' },
      );
    }, detailRef);

    return () => context.revert();
  }, [activeNumber]);

  const selectAdjacentTab = (event, currentIndex) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();

    let nextIndex = currentIndex;
    if (event.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + platformFeatures.length) % platformFeatures.length;
    if (event.key === 'ArrowRight') nextIndex = (currentIndex + 1) % platformFeatures.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = platformFeatures.length - 1;

    setActiveNumber(platformFeatures[nextIndex].number);
    tabRefs.current[nextIndex]?.focus();
  };

  const selectTab = (number, index) => {
    setActiveNumber(number);
    tabRefs.current[index]?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  return (
    <section className="audience-section platform-overview-section" id="platform" aria-labelledby="platform-heading">
      <div className="audience-shell">
        <p className="eyebrow">THE ECOMED 360 PLATFORM</p>
        <h2 id="platform-heading">
          <span>Built to Unify Healthcare</span>
          <span>Without Replacing What Already Works.</span>
        </h2>
        <p className="audience-intro">
          EcoMed 360 creates one secure infrastructure layer across the healthcare ecosystem,
          connecting fragmented systems into a unified longitudinal patient picture.
        </p>

        <div className="audience-tabs" role="tablist" aria-label="Platform capabilities">
          {platformFeatures.map((feature, index) => {
            const selected = feature.number === activeNumber;
            return (
              <button
                className={`audience-tab ${selected ? 'is-active' : ''}`}
                id={`platform-tab-${feature.number}`}
                key={feature.number}
                ref={(element) => { tabRefs.current[index] = element; }}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="platform-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => selectTab(feature.number, index)}
                onKeyDown={(event) => selectAdjacentTab(event, index)}
              >
                {feature.title}
              </button>
            );
          })}
        </div>

        <div className="audience-detail-window">
          <div
            className="audience-detail"
            id="platform-panel"
            ref={detailRef}
            role="tabpanel"
            aria-live="polite"
            aria-labelledby={`platform-tab-${activeFeature.number}`}
          >
            <p>{activeFeature.description}</p>
            <ActionButton primary action={{ label: 'Discuss Your Platform', href: '/contact#contact-form' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnerEcosystemSection() {
  return (
    <section className="partner-ecosystem-section" id="partnerships" aria-labelledby="partner-ecosystem-heading">
      <div className="partner-ecosystem-shell">
        <div className="partner-ecosystem-copy">
          <p className="eyebrow">PARTNER ECOSYSTEM</p>
          <h2 id="partner-ecosystem-heading">
            <span>Secure, Interoperable</span>
            <span>Healthcare Infrastructure</span>
            <span>at Enterprise Scale.</span>
          </h2>
          <p>
            Partner with EcoMed 360 to deliver defense-grade data fabric, zero-trust interoperability,
            and a true Medical Common Operational Picture across commercial, behavioral health,
            and government ecosystems.
          </p>
          <div className="actions">
            <ActionButton primary action={{ label: 'Become a Partner', href: '/contact#contact-form' }} />
            <ActionButton action={{ label: 'Learn About Project Sage', href: '/sage' }} />
          </div>
        </div>

        <div className="partner-ecosystem-grid" aria-label="EcoMed360 partner ecosystem">
          {partnershipLogos.map((partner) => (
            <figure className={`partner-ecosystem-logo partner-ecosystem-logo--${partner.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} key={partner.name}>
              <img src={partner.image} alt={partner.name} width={partner.width} height={partner.height} loading="lazy" decoding="async" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function DataFabricSection() {
  const [mobileFabricView, setMobileFabricView] = React.useState('sources');
  const sectionRef = React.useRef(null);
  const sourceRefs = React.useRef([]);
  const sourceContentRefs = React.useRef([]);
  const profileRef = React.useRef(null);
  const coreRef = React.useRef(null);
  const beforeCopyRef = React.useRef(null);
  const afterCopyRef = React.useRef(null);
  const pulseRef = React.useRef(null);
  const visualRef = React.useRef(null);

  React.useLayoutEffect(() => {
    const media = gsap.matchMedia();

    media.add(
      {
        reduceMotion: '(prefers-reduced-motion: reduce)',
        compact: '(max-width: 820px)',
        desktop: '(min-width: 821px)',
      },
      (matchContext) => {
        const { reduceMotion, compact } = matchContext.conditions;
        const sources = sourceRefs.current.filter(Boolean);
        const sourceContents = sourceContentRefs.current.filter(Boolean);
        const profileHeader = profileRef.current?.querySelector('.patient-profile-header');
        const profileRows = gsap.utils.toArray(profileRef.current?.querySelectorAll('.patient-record-row'));
        const profileFooter = profileRef.current?.querySelector('.patient-profile-footer');

        if (compact) return undefined;

        if (reduceMotion) {
          gsap.set(sources, { autoAlpha: 0 });
          gsap.set(coreRef.current, { autoAlpha: 0 });
          gsap.set(profileRef.current, { autoAlpha: 1, scale: 1, y: 0 });
          gsap.set([profileHeader, profileFooter, ...profileRows], { autoAlpha: 1, x: 0, y: 0 });
          gsap.set(beforeCopyRef.current, { autoAlpha: 0 });
          gsap.set(afterCopyRef.current, { autoAlpha: 1, y: 0 });
          sectionRef.current?.style.setProperty('--fabric-progress', 1);
          return undefined;
        }

        const getOrbit = () => {
          const visualWidth = visualRef.current?.clientWidth || window.innerWidth * 0.5;
          const visualHeight = visualRef.current?.clientHeight || window.innerHeight * 0.62;
          const x = compact ? visualWidth * 0.27 : visualWidth * 0.31;
          const sideX = compact ? visualWidth * 0.34 : visualWidth * 0.36;

          return [
            { x: -x, y: visualHeight * -0.25, rotation: -3.5 },
            { x, y: visualHeight * -0.25, rotation: 3.5 },
            { x: -sideX, y: visualHeight * 0.045, rotation: -4.5 },
            { x: sideX, y: visualHeight * 0.045, rotation: 4.5 },
            { x: 0, y: visualHeight * (compact ? 0.31 : 0.34), rotation: 0 },
          ];
        };

        const getDockY = (index) => {
          const spacing = compact ? 41 : 52;
          return (index - 2) * spacing + (compact ? 2 : 6);
        };

        const orbit = getOrbit();
        const curveOffsets = compact ? [8, -8, 12, -12, 0] : [18, -18, 24, -24, 0];

        gsap.set(sources, {
          xPercent: -50,
          yPercent: -50,
          x: (index) => orbit[index].x,
          y: (index) => orbit[index].y,
          rotateZ: (index) => orbit[index].rotation,
          scale: 1,
          autoAlpha: 1,
          zIndex: 30,
        });
        gsap.set(sourceContents, { autoAlpha: 1, scale: 1 });
        gsap.set(coreRef.current, { autoAlpha: 1, scale: 1 });
        gsap.set(profileRef.current, { autoAlpha: 0, scale: 0.88, y: 18 });
        gsap.set(profileHeader, { autoAlpha: 0, y: 10 });
        gsap.set(profileRows, { autoAlpha: 0, x: 14 });
        gsap.set(profileFooter, { autoAlpha: 0, y: 8 });
        gsap.set(afterCopyRef.current, { autoAlpha: 0, y: 28 });
        gsap.set(beforeCopyRef.current, { autoAlpha: 1, y: 0 });
        gsap.set(pulseRef.current, { autoAlpha: 0.24, scale: 0.78 });

        const timeline = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.05,
            invalidateOnRefresh: true,
            onUpdate: ({ progress }) => {
              sectionRef.current?.style.setProperty('--fabric-progress', progress.toFixed(4));
            },
          },
        });

        timeline
          .to(sources, {
            x: (index) => orbit[index].x * 0.72 + curveOffsets[index],
            y: (index) => orbit[index].y * 0.72,
            rotateZ: (index) => orbit[index].rotation * 0.42,
            scale: 0.97,
            duration: 0.28,
            stagger: 0.016,
          }, 0.05)
          .to(pulseRef.current, { autoAlpha: 0.58, scale: 1, duration: 0.26 }, 0.08)
          .to(coreRef.current, { scale: 0.88, autoAlpha: 0.58, duration: 0.24 }, 0.27)
          .to(sourceContents, { autoAlpha: 0, scale: 0.94, duration: 0.17, stagger: 0.024 }, 0.41)
          .to(sources, {
            x: 0,
            y: (index) => getDockY(index),
            rotateZ: 0,
            scaleX: compact ? 1.45 : 1.72,
            scaleY: compact ? 0.5 : 0.52,
            duration: 0.31,
            stagger: 0.026,
          }, 0.32)
          .to(coreRef.current, { autoAlpha: 0, scale: 0.7, duration: 0.2 }, 0.41)
          .to(profileRef.current, { autoAlpha: 1, scale: 1, y: 0, duration: 0.22 }, 0.42)
          .to(profileHeader, { autoAlpha: 1, y: 0, duration: 0.17 }, 0.46)
          .to(beforeCopyRef.current, { autoAlpha: 0, y: -26, duration: 0.2 }, 0.49)
          .to(afterCopyRef.current, { autoAlpha: 1, y: 0, duration: 0.24 }, 0.56)
          .to(profileRows, { autoAlpha: 1, x: 0, duration: 0.16, stagger: 0.045 }, 0.52)
          .to(sources, {
            autoAlpha: 0,
            duration: 0.15,
            stagger: 0.045,
          }, 0.55)
          .to(profileFooter, { autoAlpha: 1, y: 0, duration: 0.18 }, 0.75)
          .to(pulseRef.current, { autoAlpha: 0, scale: 1.2, duration: 0.18 }, 0.76)
          .to({}, { duration: 0.14 }, 0.9);

        return () => timeline.scrollTrigger?.kill();
      },
      sectionRef,
    );

    return () => media.revert();
  }, []);

  return (
    <section className={`data-fabric-section fabric-mobile-${mobileFabricView}`} id="data-fabric" ref={sectionRef} aria-labelledby="data-fabric-heading">
      <div className="data-fabric-sticky">
        <div className="data-fabric-shell">
          <div className="data-fabric-copy">
            <p className="eyebrow">THE CONNECTED DATA FABRIC</p>
            <h2 id="data-fabric-heading">Every Part of the Patient Journey, Connected.</h2>

            <div className="fabric-copy-window">
              <div className="fabric-copy-state fabric-copy-before" ref={beforeCopyRef}>
                <p>
                  EcoMed 360 securely connects information across providers, specialties, systems,
                  and care environments—bringing separate records closer to one complete patient picture.
                </p>
                <strong>Separate sources. Incomplete view.</strong>
              </div>
              <div className="fabric-copy-state fabric-copy-after" ref={afterCopyRef}>
                <p>
                  EcoMed 360 brings records together into one continuous, trusted patient record—giving
                  care teams a fuller view of the patient journey.
                </p>
                <strong>Unified sources. Complete view.</strong>
              </div>
            </div>

            <ActionButton primary action={{ label: 'Discuss the Data Fabric', href: '/contact#contact-form' }} />
            <div className="mobile-fabric-controls" role="tablist" aria-label="Patient journey views">
              <button className={mobileFabricView === 'sources' ? 'is-active' : ''} type="button" role="tab" aria-selected={mobileFabricView === 'sources'} onClick={() => setMobileFabricView('sources')}>Sources</button>
              <button className={mobileFabricView === 'profile' ? 'is-active' : ''} type="button" role="tab" aria-selected={mobileFabricView === 'profile'} onClick={() => setMobileFabricView('profile')}>Unified profile</button>
            </div>
          </div>

          <div className="data-fabric-visual" ref={visualRef}>
            <div className="fabric-sync-pulse" ref={pulseRef} aria-hidden="true" />
            <div className="fabric-core-beacon" ref={coreRef} aria-hidden="true">
              <span><UserRound size={42} strokeWidth={1.2} /></span>
              <strong>Unified Patient Record</strong>
              <small>Five sources. One trusted view.</small>
            </div>
            <div className="source-deck" aria-hidden="true">
              {patientDataSources.map((source, index) => {
                const Icon = source.icon;
                return (
                  <article
                    className="source-tile"
                    key={source.id}
                    ref={(element) => { sourceRefs.current[index] = element; }}
                  >
                    <div
                      className="source-tile-content"
                      ref={(element) => { sourceContentRefs.current[index] = element; }}
                    >
                      <span className="source-tile-icon"><Icon size={24} strokeWidth={1.35} /></span>
                      <span className="source-tile-copy">
                        <small>{source.panelLabel}</small>
                        <strong>{source.title}</strong>
                        <b>{source.metric}</b>
                      </span>
                      <i className="source-tile-status" />
                    </div>
                  </article>
                );
              })}
            </div>

            <article className="patient-profile-card" ref={profileRef} aria-label="Unified patient profile for John Doe">
              <header className="patient-profile-header">
                <span className="patient-avatar" aria-hidden="true"><UserRound size={32} strokeWidth={1.35} /></span>
                <div>
                  <h3>John Doe</h3>
                  <p>MRN 12345678</p>
                  <p>DOB 06/14/1970 <span aria-hidden="true">•</span> Male</p>
                </div>
              </header>
              <div className="patient-record-list">
                {patientDataSources.map((source) => {
                  const Icon = source.icon;
                  return (
                    <div className="patient-record-row" key={source.id}>
                      <Icon size={27} strokeWidth={1.35} aria-hidden="true" />
                      <span><strong>{source.title}</strong><small>{source.metric}</small></span>
                      <i aria-hidden="true"><Check size={15} strokeWidth={2} /></i>
                    </div>
                  );
                })}
              </div>
              <footer className="patient-profile-footer">
                <span aria-hidden="true"><ShieldCheck size={20} strokeWidth={1.4} /></span>
                <p><strong>Secure. Connected. Complete.</strong><small>All data synchronized across the care ecosystem.</small></p>
              </footer>
            </article>

            <div className="fabric-scroll-progress">
              <span className="fabric-scroll-label"><i><ArrowDown size={13} strokeWidth={1.8} /></i>SCROLL TO UNIFY</span>
              <span className="fabric-scroll-track" aria-hidden="true"><b /></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  const sectionRef = React.useRef(null);
  const trackRef = React.useRef(null);

  React.useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const compactLayout = window.matchMedia('(max-width: 820px)').matches;
    if (reduceMotion || compactLayout) return undefined;

    let removeRefreshListener;
    const context = gsap.context(() => {
      // Measure once per ScrollTrigger refresh instead of forcing layout reads on every tick.
      let distance = 0;
      const measureDistance = () => {
        const track = trackRef.current;
        const viewport = track?.parentElement;
        distance = track && viewport ? Math.max(0, track.scrollHeight - viewport.clientHeight) : 0;
      };
      measureDistance();
      ScrollTrigger.addEventListener('refreshInit', measureDistance);
      removeRefreshListener = () => ScrollTrigger.removeEventListener('refreshInit', measureDistance);

      gsap.to(trackRef.current, {
        y: () => -distance,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.05,
          invalidateOnRefresh: true,
        },
      });

    }, sectionRef);

    return () => {
      removeRefreshListener?.();
      context.revert();
    };
  }, []);

  return (
    <section
      className="platform-section audience-platform"
      id="solutions"
      ref={sectionRef}
      aria-labelledby="audience-heading"
    >
      <div className="platform-sticky audience-platform-sticky">
        <div className="platform-grid" aria-hidden="true" />
        <div className="platform-shell">
          <div className="platform-intro">
            <p className="eyebrow">{audienceMission.kicker}</p>
            <h2 id="audience-heading">{audienceMission.title}</h2>
            <div className="mission-overview">
              <p className="mission-detail">{audienceMission.detail}</p>
              <div className="mission-capabilities" aria-label="Core platform capabilities">
                {audienceMission.capabilities.map((capability) => (
                  <span key={capability}>{capability}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="audience-platform-panel">
            <p className="mobile-swipe-hint audience-swipe-hint" aria-hidden="true"><span>Swipe</span> to explore capabilities <ArrowRight size={15} strokeWidth={1.7} /></p>
            <div className="feature-window" tabIndex={0} aria-label="Platform capabilities. Swipe horizontally to explore.">
              <div className="feature-track audience-feature-track" ref={trackRef}>
                {audienceOptions.map((option, index) => (
                  <article className="feature-row" key={option.id}>
                    <span className="feature-number">{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <p className="feature-kicker">{option.label}</p>
                      <h3>{option.title}</h3>
                      <p>{option.detail}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="platform-conclusion">
              <p>
                One secure, interoperable platform for commercial healthcare, government health,
                and defense operations.
              </p>
              <ActionButton primary action={{ label: 'Talk to a Solutions Specialist', href: '/contact#contact-form' }} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function SpecializedSection() {
  const sectionRef = React.useRef(null);

  React.useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const compactLayout = window.matchMedia('(max-width: 820px)').matches;
    if (reduceMotion || compactLayout) return undefined;

    const context = gsap.context(() => {
      gsap.fromTo(
        '.specialized-card',
        { y: 90 },
        {
          y: 0,
          stagger: 0.1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.specialized-media',
            start: 'top 92%',
            end: 'top 42%',
            scrub: 0.85,
          },
        },
      );
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section className="specialized-section" id="specialized-solutions" ref={sectionRef} aria-labelledby="specialized-heading">
      <div className="specialized-copy">
        <p className="eyebrow">SPECIALIZED SOLUTIONS</p>
        <h2 id="specialized-heading">
          Built for Care Environments Where
          <span>Continuity, Security, and Readiness Matter Most.</span>
        </h2>
        <p>
          EcoMed 360 extends beyond commercial healthcare into government, operational medicine,
          and Tribal Health environments while preserving one secure and interoperable foundation.
        </p>
      </div>

      <p className="mobile-swipe-hint specialized-swipe-hint" aria-hidden="true"><span>Swipe</span> to explore solutions <ArrowRight size={15} strokeWidth={1.7} /></p>
      <div className="specialized-media" tabIndex={0} aria-label="Specialized solutions. Swipe horizontally to explore.">
        {specializedSolutions.map((solution) => {
          const Icon = solution.icon;
          return (
            <article className="specialized-card" key={solution.id}>
              <img
                className="specialized-card-image"
                src={solution.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                style={{ objectPosition: solution.imagePosition }}
              />
              <div className="specialized-card-content">
                <span className="specialized-icon" aria-hidden="true">
                  <Icon size={38} strokeWidth={1.45} />
                </span>
                <div>
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="mission-section" id="mission" aria-labelledby="mission-heading">
      <div className="mission-gradient" aria-hidden="true" />
      <div className="mission-shade" aria-hidden="true" />
      <div className="mission-content">
        <div className="mission-label-group">
          <p className="mission-label">THE MISSION</p>
        </div>

        <h2 id="mission-heading">
          To create a future where every provider sees the complete patient picture, every decision is informed, and every person receives connected, high-quality care regardless of where they live.
        </h2>

        <div className="mission-signature" aria-label="Eron Heard, Founder and CEO">
          <img className="mission-avatar mission-avatar-image" src={teamEronHeard} alt="" aria-hidden="true" loading="lazy" decoding="async" />
          <span className="mission-signature-copy">
            <strong>Eron Heard</strong>
            <span>Founder &amp; CEO</span>
          </span>
        </div>
      </div>
    </section>
  );
}

function LeadershipPortrait({ member }) {
  if (member.image) {
    return <img className="leadership-portrait-image" src={member.image} alt="" aria-hidden="true" loading="lazy" decoding="async" />;
  }

  return (
    <div className="leadership-portrait-placeholder" aria-hidden="true">
      <span className="leadership-portrait-aura" />
      <UserRound className="leadership-portrait-icon" size={126} strokeWidth={0.72} />
      <span className="leadership-portrait-scan" />
    </div>
  );
}

function LinkedInIcon({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M5.5 8.5H2V21h3.5V8.5ZM3.75 3a2.05 2.05 0 1 0 0 4.1 2.05 2.05 0 0 0 0-4.1ZM8 8.5h3.4v1.7h.05C11.95 9.1 13.3 8 15.4 8c3.55 0 4.2 2.34 4.2 5.38V21h-3.5v-6.75c0-1.61-.03-3.68-2.24-3.68-2.24 0-2.58 1.75-2.58 3.56V21H8V8.5Z" />
    </svg>
  );
}

function LeadershipCard({ member }) {
  return (
    <article className="leadership-card">
      <LeadershipPortrait member={member} />
      <div className="leadership-card-copy">
        <h3>{member.name}</h3>
        <p>{member.role}</p>
      </div>
      <a
        className="leadership-linkedin"
        href={member.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label={`View ${member.name}'s LinkedIn profile`}
      >
        <LinkedInIcon size={17} />
      </a>
    </article>
  );
}

function LeadershipSection() {
  const sectionRef = React.useRef(null);
  const trackRef = React.useRef(null);

  React.useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const compactLayout = window.matchMedia('(max-width: 820px)').matches;
    if (reduceMotion || compactLayout) return undefined;

    let removeRefreshListener;
    const context = gsap.context(() => {
      // Keep geometry reads out of scroll updates; refresh is the only time layout changes.
      let distance = 0;
      const measureDistance = () => {
        const track = trackRef.current;
        const viewport = track?.parentElement;
        distance = track && viewport ? Math.max(0, track.scrollHeight - viewport.clientHeight) : 0;
      };
      measureDistance();
      ScrollTrigger.addEventListener('refreshInit', measureDistance);
      removeRefreshListener = () => ScrollTrigger.removeEventListener('refreshInit', measureDistance);

      gsap.to(trackRef.current, {
        y: () => -distance,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.05,
          invalidateOnRefresh: true,
          onUpdate: (self) => sectionRef.current?.style.setProperty('--leadership-progress', self.progress.toFixed(4)),
        },
      });

    }, sectionRef);

    return () => {
      removeRefreshListener?.();
      context.revert();
    };
  }, []);

  return (
    <section className="leadership-section" id="leadership" ref={sectionRef} aria-labelledby="leadership-heading">
      <div className="leadership-sticky">
        <div className="leadership-shell">
          <div className="leadership-copy">
            <div className="leadership-label-group">
              <p className="eyebrow">LEADERSHIP</p>
            </div>
            <h2 id="leadership-heading">Leadership Built to Modernize Healthcare at Scale</h2>
            <p className="leadership-intro">
              A multidisciplinary team spanning healthcare delivery, interoperability, cybersecurity,
              compliance, analytics, federal programs and enterprise transformation.
            </p>
          </div>

          <p className="mobile-swipe-hint leadership-swipe-hint" aria-hidden="true"><span>Swipe</span> to meet the team <ArrowRight size={15} strokeWidth={1.7} /></p>
          <div className="leadership-visual" tabIndex={0} aria-label="EcoMed360 leadership team. Swipe horizontally to explore.">
            <div className="leadership-track" ref={trackRef}>
              {leadershipTeam.map((member) => <LeadershipCard key={member.id} member={member} />)}
            </div>
            <div className="leadership-progress" aria-hidden="true">
              <i><b /></i>
              <span>SCROLL TO MEET THE TEAM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RotatingEarth() {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const stage = canvas?.parentElement;
    const context = canvas?.getContext('2d');
    if (!canvas || !stage || !context) return undefined;

    let disposed = false;
    let countries = null;
    let stateBoundaries = null;
    let dots = [];
    let oceanGradient = null;
    let atmosphereGradient = null;
    let dimensions = { width: 0, height: 0, radius: 0, cx: 0, cy: 0 };
    const baseRotation = [100, -12, 0];
    const rotation = [...baseRotation];
    const mapZoom = 1.12;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const graticuleGeometry = d3.geoGraticule().step([15, 15])();
    const fineGraticuleGeometry = d3.geoGraticule().step([10, 10])();
    const frameInterval = 1000 / 15;
    let dragging = false;
    let dragStart = null;
    let resumeTimer = null;
    let autoRotate = !reduceMotion;
    let inView = false;
    let pageVisible = document.visibilityState === 'visible';
    let frameRequest = 0;
    let lastRenderTime = 0;
    let rotationElapsed = 0;
    let needsRender = true;
    let dataRequested = false;
    const fetchController = new AbortController();
    const radians = Math.PI / 180;

    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
    const isNorthAmerica = (feature) => highlightedCountries.has(feature?.properties?.ADMIN);
    const isFocusCountry = (feature) => feature?.properties?.ADMIN === 'United States of America';

    const resize = () => {
      const rect = stage.getBoundingClientRect();
      const width = Math.max(320, Math.round(rect.width));
      const height = Math.max(300, Math.round(rect.height));
      const dpr = Math.min(1.15, window.devicePixelRatio || 1);
      dimensions = {
        width,
        height,
        radius: Math.min(width * (width < 600 ? .72 : .54), height * .82),
        cx: width / 2,
        cy: height * .98,
      };
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      oceanGradient = context.createRadialGradient(
        dimensions.cx - dimensions.radius * .34,
        dimensions.cy - dimensions.radius * .42,
        0,
        dimensions.cx,
        dimensions.cy,
        dimensions.radius * 1.08,
      );
      oceanGradient.addColorStop(0, '#08375a');
      oceanGradient.addColorStop(.48, '#031b34');
      oceanGradient.addColorStop(1, '#010913');
      atmosphereGradient = context.createRadialGradient(
        dimensions.cx - dimensions.radius * .3,
        dimensions.cy - dimensions.radius * .45,
        dimensions.radius * .16,
        dimensions.cx,
        dimensions.cy,
        dimensions.radius * 1.02,
      );
      atmosphereGradient.addColorStop(0, 'rgba(31, 154, 214, .08)');
      atmosphereGradient.addColorStop(.62, 'rgba(1, 9, 19, 0)');
      atmosphereGradient.addColorStop(1, 'rgba(0, 3, 10, .55)');
      projection
        .scale(dimensions.radius * mapZoom)
        .translate([dimensions.cx, dimensions.cy])
        .rotate(rotation);
      requestCanvasRender();
    };

    const projection = d3.geoOrthographic().clipAngle(90);
    const path = d3.geoPath().projection(projection).context(context);

    const generateDots = (feature, step) => {
      const dotsForFeature = [];
      const [[minLng, minLat], [maxLng, maxLat]] = d3.geoBounds(feature);
      for (let lng = minLng; lng <= maxLng; lng += step) {
        for (let lat = minLat; lat <= maxLat; lat += step) {
          const point = [lng, lat];
          if (d3.geoContains(feature, point)) {
            const lngRadians = lng * radians;
            const latRadians = lat * radians;
            dotsForFeature.push({
              sinLng: Math.sin(lngRadians),
              cosLng: Math.cos(lngRadians),
              sinLat: Math.sin(latRadians),
              cosLat: Math.cos(latRadians),
              highlight: isNorthAmerica(feature),
              focus: isFocusCountry(feature),
            });
          }
        }
      }
      return dotsForFeature;
    };

    const render = () => {
      const { width, height, radius, cx, cy } = dimensions;
      if (!width || !height || !radius) return;
      context.clearRect(0, 0, width, height);
      projection.scale(radius * mapZoom).translate([cx, cy]).rotate(rotation);

      context.save();
      context.beginPath();
      context.arc(cx, cy, radius, 0, Math.PI * 2);
      context.clip();

      context.fillStyle = oceanGradient || '#031b34';
      context.fillRect(cx - radius, cy - radius, radius * 2, radius * 2);

      context.fillStyle = atmosphereGradient || 'rgba(1, 9, 19, 0)';
      context.fillRect(cx - radius, cy - radius, radius * 2, radius * 2);

      context.beginPath();
      path(fineGraticuleGeometry);
      context.strokeStyle = 'rgba(35, 186, 239, .08)';
      context.lineWidth = .45;
      context.stroke();

      context.beginPath();
      path(graticuleGeometry);
      context.strokeStyle = 'rgba(35, 186, 239, .17)';
      context.lineWidth = .65;
      context.stroke();

      if (countries) {
        countries.features.forEach((feature) => {
          context.beginPath();
          path(feature);
          context.fillStyle = isFocusCountry(feature) ? 'rgba(0, 228, 216, .24)' : isNorthAmerica(feature) ? 'rgba(0, 188, 208, .08)' : 'rgba(26, 121, 179, .075)';
          context.fill();
          context.strokeStyle = isFocusCountry(feature) ? 'rgba(92, 255, 231, .98)' : isNorthAmerica(feature) ? 'rgba(52, 227, 226, .52)' : 'rgba(55, 164, 215, .32)';
          context.lineWidth = isFocusCountry(feature) ? 1.35 : isNorthAmerica(feature) ? .8 : .55;
          context.stroke();
        });

        if (stateBoundaries) {
          context.beginPath();
          stateBoundaries.features.forEach((state) => path(state));
          context.strokeStyle = 'rgba(116, 244, 237, .46)';
          context.lineWidth = .55;
          context.stroke();
        }

        const dotGroups = {
          normal: [],
          highlight: [],
          focus: [],
        };
        const globeScale = radius * mapZoom;
        const rotateLng = rotation[0] * radians;
        const rotateLat = rotation[1] * radians;
        const sinRotateLng = Math.sin(rotateLng);
        const cosRotateLng = Math.cos(rotateLng);
        const sinRotateLat = Math.sin(rotateLat);
        const cosRotateLat = Math.cos(rotateLat);
        dots.forEach((dot) => {
          const sinLng = dot.sinLng * cosRotateLng + dot.cosLng * sinRotateLng;
          const cosLng = dot.cosLng * cosRotateLng - dot.sinLng * sinRotateLng;
          const depth = cosLng * dot.cosLat * cosRotateLat - dot.sinLat * sinRotateLat;
          if (depth <= 0) return;
          const projectedX = cx + globeScale * sinLng * dot.cosLat;
          const projectedY = cy - globeScale * (dot.sinLat * cosRotateLat + cosLng * dot.cosLat * sinRotateLat);
          dotGroups[dot.focus ? 'focus' : dot.highlight ? 'highlight' : 'normal'].push([projectedX, projectedY]);
        });

        const drawDots = (points, radius, fillStyle) => {
          if (!points.length) return;
          context.beginPath();
          points.forEach(([x, y]) => {
            context.moveTo(x + radius, y);
            context.arc(x, y, radius, 0, Math.PI * 2);
          });
          context.fillStyle = fillStyle;
          context.fill();
        };
        drawDots(dotGroups.normal, .62, 'rgba(95, 191, 235, .25)');
        drawDots(dotGroups.highlight, .95, 'rgba(75, 224, 224, .58)');
        if (dotGroups.focus.length) {
          drawDots(dotGroups.focus, 1.5, 'rgba(111, 255, 229, .92)');
        }

        context.beginPath();
        context.arc(cx, cy, radius - .5, Math.PI, Math.PI * 2);
        context.strokeStyle = 'rgba(77, 210, 247, .5)';
        context.lineWidth = 1.2;
        context.stroke();

      }

      context.restore();
    };

    const stopAnimation = () => {
      if (frameRequest) window.cancelAnimationFrame(frameRequest);
      frameRequest = 0;
      lastRenderTime = 0;
      canvas.dataset.animationActive = 'false';
    };

    const scheduleAnimation = () => {
      if (disposed || !inView || !pageVisible || frameRequest) return;
      canvas.dataset.animationActive = 'true';
      frameRequest = window.requestAnimationFrame(animate);
    };

    function requestCanvasRender() {
      needsRender = true;
      scheduleAnimation();
    }

    function animate(now) {
      frameRequest = 0;
      if (disposed || !inView || !pageVisible) {
        stopAnimation();
        return;
      }

      const elapsedSinceRender = lastRenderTime ? now - lastRenderTime : frameInterval;
      const shouldRender = needsRender || ((autoRotate || dragging) && elapsedSinceRender >= frameInterval);

      if (shouldRender) {
        if (autoRotate && !dragging) {
          rotationElapsed += Math.min(elapsedSinceRender, 80);
          rotation[0] = baseRotation[0] + Math.sin(rotationElapsed * .00012) * 16;
          rotation[1] = baseRotation[1] + Math.sin(rotationElapsed * .00009) * 3;
          projection.rotate(rotation);
        }
        render();
        needsRender = false;
        lastRenderTime = now;
      }

      if (autoRotate || dragging || needsRender) scheduleAnimation();
      else stopAnimation();
    }

    const handlePointerDown = (event) => {
      dragging = true;
      autoRotate = false;
      dragStart = { x: event.clientX, y: event.clientY, rotation: [...rotation] };
      canvas.setPointerCapture?.(event.pointerId);
      canvas.classList.add('is-dragging');
      if (resumeTimer) window.clearTimeout(resumeTimer);
    };

    const handlePointerMove = (event) => {
      if (!dragging || !dragStart) return;
      const dx = event.clientX - dragStart.x;
      const dy = event.clientY - dragStart.y;
      rotation[0] = clamp(dragStart.rotation[0] + dx * .14, baseRotation[0] - 28, baseRotation[0] + 28);
      rotation[1] = clamp(dragStart.rotation[1] - dy * .12, baseRotation[1] - 16, baseRotation[1] + 16);
      projection.rotate(rotation);
      requestCanvasRender();
    };

    const handlePointerUp = () => {
      if (!dragging) return;
      dragging = false;
      dragStart = null;
      canvas.classList.remove('is-dragging');
      resumeTimer = window.setTimeout(() => {
        autoRotate = !reduceMotion;
        scheduleAnimation();
      }, 900);
    };

    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointercancel', handlePointerUp);
    const resizeObserver = new ResizeObserver(resize);
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (inView) {
        requestCanvasRender();
        // Globe data is only useful once this section is near the viewport.
        // Delaying the fetch removes two large third-party JSON requests from the initial path.
        prepareGlobe();
      }
      else stopAnimation();
    }, { threshold: 0.01 });

    const prepareGlobe = () => {
      if (dataRequested || disposed) return;
      dataRequested = true;
      fetch(globeCountriesUrl, { signal: fetchController.signal })
        .then((response) => {
          if (!response.ok) throw new Error('World data unavailable');
          return response.json();
        })
        .then((data) => {
          if (disposed) return;
          countries = {
            ...data,
            features: data.features.filter((feature) => isNorthAmerica(feature)),
          };
          dots = data.features.flatMap((feature) => isFocusCountry(feature) ? [] : generateDots(feature, isNorthAmerica(feature) ? 2 : 3.4));
          canvas.dataset.dotCount = String(dots.length);
          requestCanvasRender();
        })
        .catch((error) => {
          if (!disposed && error.name !== 'AbortError') requestCanvasRender();
        });
      fetch(globeStatesUrl, { signal: fetchController.signal })
        .then((response) => {
          if (!response.ok) throw new Error('State boundary data unavailable');
          return response.json();
        })
        .then((data) => {
          if (disposed) return;
          stateBoundaries = data;
          canvas.dataset.stateCount = String(data.features?.length || 0);
          requestCanvasRender();
        })
        .catch((error) => {
          if (!disposed && error.name !== 'AbortError') requestCanvasRender();
        });
    };

    const handleVisibilityChange = () => {
      pageVisible = document.visibilityState === 'visible';
      if (pageVisible && inView) requestCanvasRender();
      else stopAnimation();
    };

    resizeObserver.observe(stage);
    visibilityObserver.observe(stage);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    resize();

    return () => {
      disposed = true;
      stopAnimation();
      fetchController.abort();
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (resumeTimer) window.clearTimeout(resumeTimer);
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointercancel', handlePointerUp);
    };
  }, []);

  return <canvas ref={canvasRef} className="rotating-earth-canvas" aria-label="Interactive globe with detailed U.S. state boundaries" />;
}

function GlobeSection() {
  if (window.matchMedia('(max-width: 560px)').matches) return null;

  return (
    <section className="globe-section" id="contact" aria-labelledby="globe-heading">
      <div className="globe-shell">
        <div className="globe-copy">
          <h2 id="globe-heading">Your ZIP Code Should Never Determine the Quality of Your Care.</h2>
          <div className="globe-actions">
            <ActionButton primary action={{ label: 'Build a More Connected Future', href: '/contact#contact-form' }} />
          </div>
        </div>
        <div className="globe-visual" aria-hidden="true">
          <img src={connectedCareGlobe} alt="Connected healthcare network globe" width="1672" height="941" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  );
}

const aboutSteps = [
  {
    id: 'about-intro',
    eyebrow: 'ABOUT ECOMED 360',
    headline: [
      'Building the Infrastructure',
      'for a More Connected',
      'Healthcare Future.',
    ],
    body: [
      'EcoMed 360 is a secure, connected healthcare platform that unifies records, people, and care environments so every decision is informed and every patient receives the best possible care.',
    ],
    primaryAction: { label: 'Our Mission', href: '#about-mission' },
    secondaryAction: { label: 'Work With Us', href: '/contact#contact-form' },
  },
  {
    id: 'about-why',
    eyebrow: 'WHY WE EXIST',
    headlineBlocks: [
      { lines: ['Healthcare', 'became more', 'advanced.'], accent: 'cyan' },
      { lines: ['Its information', 'became more', 'fragmented.'], accent: 'gradient' },
    ],
    body: [
      'Critical patient information lives across disconnected providers, payers, labs, and systems—creating gaps, delays, and unnecessary risk.',
      'EcoMed 360 was created to change that. We bring every record, every encounter, and every insight together around one complete patient picture.',
      'Because better care starts with the full story.',
    ],
  },
];

function AboutScene({ step, index, active, sceneRef, contentRef }) {
  const compactLayout = window.matchMedia('(max-width: 820px)').matches;
  return (
    <article
      ref={sceneRef}
      className={`about-step about-step-${index + 1} ${active ? 'is-active' : ''}`}
      aria-hidden={compactLayout ? undefined : !active}
      inert={compactLayout ? undefined : active ? undefined : true}
    >
      <div className={`about-step-content ${step.headlineBlocks ? 'about-split-content' : ''}`} ref={contentRef}>
        <div className="about-step-head">
          <p className="eyebrow">{step.eyebrow}</p>
          {step.headlineBlocks ? (
            <h1 className="about-why-headline">
              {step.headlineBlocks.map((block) => (
                <span className="about-why-block" key={block.lines.join('-')}>
                  {block.lines.map((line, lineIndex) => (
                    <span className={lineIndex === block.lines.length - 1 ? `about-why-accent about-why-accent-${block.accent}` : ''} key={line}>{line}</span>
                  ))}
                </span>
              ))}
            </h1>
          ) : <Headline lines={step.headline} />}
        </div>
        <div className="body-copy about-body-copy">
          {step.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        {step.primaryAction && (
          <div className="actions">
            <ActionButton primary action={step.primaryAction} />
            <ActionButton action={step.secondaryAction} />
          </div>
        )}
      </div>
    </article>
  );
}

function AboutPage() {
  const sequenceRef = React.useRef(null);
  const backgroundRef = React.useRef(null);
  const firstSceneRef = React.useRef(null);
  const firstContentRef = React.useRef(null);
  const secondSceneRef = React.useRef(null);
  const secondContentRef = React.useRef(null);
  const activeRef = React.useRef(0);
  const [activeStep, setActiveStep] = React.useState(0);

  React.useLayoutEffect(() => {
    document.title = 'About EcoMed360 | Connected Healthcare Infrastructure';
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const compactLayout = window.matchMedia('(max-width: 820px)').matches;
    let lenis;
    let tickerCallback;
    const pointerCleanups = [];

    const context = gsap.context(() => {
      if (reduceMotion || compactLayout) {
        gsap.set([
          firstSceneRef.current,
          firstContentRef.current,
          secondSceneRef.current,
          secondContentRef.current,
          backgroundRef.current,
        ], { clearProps: 'all' });
        return;
      }

      lenis = new Lenis({
        lerp: 0.075,
        smoothWheel: true,
        wheelMultiplier: 0.86,
        anchors: true,
      });

      const onLenisScroll = () => ScrollTrigger.update();
      const onTick = (time) => lenis.raf(time * 1000);
      tickerCallback = onTick;
      lenis.on('scroll', onLenisScroll);
      gsap.ticker.add(onTick);
      gsap.ticker.lagSmoothing(0);

      gsap.set(secondSceneRef.current, { yPercent: 108 });
      gsap.set(secondContentRef.current, { y: () => window.innerHeight * 0.38 });
      // Keep the background slightly overscanned so the cinematic transition never
      // exposes an empty strip around the viewport while it moves.
      gsap.set(backgroundRef.current, { scale: 1.02, transformOrigin: 'center center' });

      const timeline = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: sequenceRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.05,
          invalidateOnRefresh: true,
          onUpdate: ({ progress }) => {
            const nextStep = progress < 0.58 ? 0 : 1;
            if (nextStep !== activeRef.current) {
              activeRef.current = nextStep;
              setActiveStep(nextStep);
            }
          },
        },
      });

      timeline
        .to(firstContentRef.current, { yPercent: -118, duration: 0.66 }, 0.04)
        .to(secondContentRef.current, { y: 0, duration: 0.56 }, 0.04)
        .to(backgroundRef.current, { scale: 1.01, yPercent: -1.2, duration: 1.7 }, 0)
        .to(firstSceneRef.current, { yPercent: -108, duration: 0.48 }, 0.34)
        .to(secondSceneRef.current, { yPercent: 0, duration: 0.48 }, 0.34);

      if (!window.matchMedia('(pointer: coarse)').matches) {
        gsap.utils.toArray('[data-magnetic]').forEach((element) => {
          const xTo = gsap.quickTo(element, 'x', { duration: 0.45, ease: 'power3.out' });
          const yTo = gsap.quickTo(element, 'y', { duration: 0.45, ease: 'power3.out' });
          const move = (event) => {
            const rect = element.getBoundingClientRect();
            xTo((event.clientX - rect.left - rect.width / 2) * 0.1);
            yTo((event.clientY - rect.top - rect.height / 2) * 0.1);
          };
          const leave = () => { xTo(0); yTo(0); };
          element.addEventListener('pointermove', move);
          element.addEventListener('pointerleave', leave);
          pointerCleanups.push(() => {
            element.removeEventListener('pointermove', move);
            element.removeEventListener('pointerleave', leave);
          });
        });
      }

      document.fonts.ready.then(() => ScrollTrigger.refresh());
    }, sequenceRef);

    return () => {
      pointerCleanups.forEach((cleanup) => cleanup());
      if (tickerCallback) gsap.ticker.remove(tickerCallback);
      lenis?.destroy();
      context.revert();
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#about-content">Skip to Content</a>
      <main id="about-top" className="about-sequence" ref={sequenceRef}>
        <div className="about-sticky">
          <div className="about-background" ref={backgroundRef} aria-hidden="true" />
          <Navigation activePage="about" />
          <div className="about-container" id="about-content">
            <AboutScene
              step={aboutSteps[0]}
              index={0}
              active={activeStep === 0}
              sceneRef={firstSceneRef}
              contentRef={firstContentRef}
            />
            <AboutScene
              step={aboutSteps[1]}
              index={1}
              active={activeStep === 1}
              sceneRef={secondSceneRef}
              contentRef={secondContentRef}
            />
          </div>
          <span className="scroll-cue" aria-hidden="true"><span />Scroll to Explore</span>
        </div>
      </main>
      <section className="about-mission-section" id="about-mission" aria-labelledby="about-mission-heading">
        <span className="about-mission-word about-mission-word-left" aria-hidden="true">MISSION</span>
        <span className="about-mission-word about-mission-word-right" aria-hidden="true">VISION</span>
        <div className="about-mission-content">
          <h2 className="about-visually-hidden" id="about-mission-heading">Our Mission and Our Vision</h2>
          <div className="about-principle about-principle-mission">
            <p className="eyebrow">OUR MISSION</p>
            <p>To connect every patient, every record, and every decision—so care is seamless, secure, and always within reach.</p>
          </div>
          <div className="about-trademark-wrap" aria-hidden="true">
            <span className="about-trademark-line about-trademark-line-left" />
            <img className="about-trademark" src={aboutTrademark} alt="" width="1024" height="682" decoding="async" />
            <span className="about-trademark-line about-trademark-line-right" />
          </div>
          <div className="about-principle about-principle-vision">
            <p className="eyebrow">OUR VISION</p>
            <p>To create a future where every provider sees the complete patient picture in real time—delivering better outcomes for every life, everywhere.</p>
          </div>
        </div>
      </section>
      <LeadershipSection />
      <section className="about-final-cta" id="about-cta" aria-labelledby="about-cta-heading">
        <div className="about-final-cta-shade" aria-hidden="true" />
        <div className="about-final-cta-content">
          <p className="eyebrow">WHAT COMES NEXT</p>
          <h2 id="about-cta-heading">Building a More Connected<br />Future for Healthcare.</h2>
          <p className="about-final-cta-copy">
            We’re advancing the connected healthcare ecosystem{' '}<br />{' '}
            so every decision is informed and every patient receives the best possible care.
          </p>
          <div className="actions">
            <ActionButton primary action={{ label: 'Request a Consultation', href: '/contact#contact-form' }} />
            <ActionButton action={{ label: 'Email EcoMed 360', href: 'mailto:info@ecomed360.ai' }} />
          </div>
        </div>
      </section>
      <SiteFooter activePage="about" />
    </>
  );
}

function ContactPage() {
  const [status, setStatus] = React.useState('');
  const contactEmail = CONTACT_EMAIL;

  const handleSubmit = (event) => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget).entries());

    const subject = `EcoMed 360 inquiry: ${values.inquiry || 'General'}`;
    const body = [
      `Name: ${values.name}`,
      `Work email: ${values.email}`,
      `Organization: ${values.organization}`,
      `Inquiry type: ${values.inquiry}`,
      '',
      values.message,
    ].join('\n');
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('Opening your email app…');
  };

  return (
    <div className="contact-page">
      <div className="contact-background" aria-hidden="true" />
      <Navigation activePage="contact" />
      <main className="contact-main" id="contact-top">
        <section className="contact-hero" aria-labelledby="contact-heading">
        <div className="contact-content">
            <p className="eyebrow">CONTACT US</p>
            <h1 id="contact-heading">Let’s Build the<br />Right Connection.</h1>
            <p className="contact-intro">
              Tell us about your goals. Our team will connect to explore{' '}<br className="contact-desktop-break" />{' '}
              how EcoMed 360° can support your care ecosystem.
            </p>

            <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
              <div className="contact-field-grid">
                <label className="contact-field">
                  <span>Full Name</span>
                  <input name="name" type="text" placeholder="Enter your full name" autoComplete="name" required />
                </label>
                <label className="contact-field">
                  <span>Work Email</span>
                  <input name="email" type="email" placeholder="name@organization.com" autoComplete="email" required />
                </label>
                <label className="contact-field contact-field-wide">
                  <span>Organization</span>
                  <input name="organization" type="text" placeholder="Enter your organization" autoComplete="organization" required />
                </label>
                <label className="contact-field contact-field-wide">
                  <span>Inquiry Type</span>
                  <select name="inquiry" defaultValue="" required>
                    <option value="" disabled>Select an option</option>
                    <option value="Platform overview">Platform overview</option>
                    <option value="Schedule a consultation">Schedule a consultation</option>
                    <option value="Request a demo">Request a demo</option>
                    <option value="Partnership inquiry">Partnership inquiry</option>
                  </select>
                </label>
                <label className="contact-field contact-field-wide">
                  <span>Message</span>
                  <textarea name="message" placeholder="Tell us more about your project or goals…" rows="5" required />
                </label>
              </div>
              <div className="contact-submit-wrap">
                <button className="action action-primary contact-submit" type="submit">
                  <span>Send Inquiry</span>
                  <span className="action-icon" aria-hidden="true"><ArrowRight size={21} strokeWidth={1.7} /></span>
                </button>
              </div>
              <p className="contact-form-status" aria-live="polite">{status}</p>
            </form>
          </div>
        </section>

        <SiteFooter activePage="contact" />
      </main>
    </div>
  );
}

function ProjectSagePage() {
  React.useEffect(() => {
    document.title = 'Project SAGE | EcoMed 360';
  }, []);

  return (
    <div className="sage-page">
      <a className="skip-link" href="#sage-content">Skip to Content</a>
      <div className="sage-hero" id="sage-top">
        <div className="sage-hero-photo" style={{ backgroundImage: `url(${projectSagePhoto})` }} aria-hidden="true" />
        <div className="sage-hero-vignette" aria-hidden="true" />
        <Navigation activePage="sage" />
        <main className="sage-hero-content" id="sage-content" aria-labelledby="sage-heading">
          <p className="eyebrow">PROJECT SAGE</p>
          <h1 id="sage-heading">Securely Connecting Care. Empowering Communities.</h1>
          <p className="sage-hero-copy">
            Project SAGE is a Tribal-led, Nation to Nation initiative creating a secure, sovereign, and enduring digital health infrastructure for Native communities. By connecting clinical, operational, financial, and patient-generated health data within one governed ecosystem, Project SAGE gives Tribal Nations greater control over their health information, strengthens cybersecurity, and provides care teams with a more complete picture of every patient.
          </p>
        </main>
      </div>
      <div className="sage-intro-sections">
        <section className="sage-intro-section sage-overview" id="sage-overview" aria-labelledby="sage-overview-heading">
          <div className="sage-intro-shell">
            <div className="sage-intro-copy">
              <p className="eyebrow">WHAT PROJECT SAGE IS</p>
              <h2 id="sage-overview-heading">A Secure, Sovereign<br />and Enduring Digital<br />Health Infrastructure.</h2>
              <p>Project SAGE is a Tribal-led initiative creating a secure, sovereign, and enduring digital health infrastructure for Native communities.</p>
              <p>Through its partnership with MA’AT Enterprises, EcoMed 360 delivers the secure digital foundation that enables this vision, extending coordinated, high-quality care across rural, remote, and connectivity-limited communities without requiring Tribal health systems to replace the technology they already trust. Project SAGE is more than a technology initiative, it is a generational investment in Tribal sovereignty, stronger communities, local workforce development, and a sustainable healthcare future where a patient’s ZIP code never determines the quality of their care.</p>
            </div>
          </div>
        </section>
        <section className="sage-intro-section sage-foundation" id="sage-foundation" aria-labelledby="sage-foundation-heading">
          <div className="sage-intro-shell">
            <div className="sage-intro-copy">
              <p className="eyebrow">THE DIGITAL FOUNDATION BEHIND THE VISION</p>
              <h2 id="sage-foundation-heading">Project SAGE: A Generational<br />Infrastructure Investment in Healthcare</h2>
              <p>Project SAGE represents an investment in the health and resilience of tribal and rural communities, building a foundational infrastructure designed to endure and protect generations to come.</p>
              <p className="sage-intro-tagline">Connect what already exists. Strengthen what comes next.</p>
            </div>
          </div>
        </section>
      </div>
      <section className="sage-collaboration" id="sage-collaboration" aria-labelledby="sage-collaboration-heading">
        <div className="sage-collaboration-heading">
          <p className="eyebrow">PROJECT SAGE</p>
          <h2 id="sage-collaboration-heading">Different Strengths.<br />One Shared Mission.</h2>
          <p>EcoMed 360 and MA&apos;AT combine what each does best<br className="sage-collaboration-desktop-break" /> to create a more connected, secure, and compassionate future.</p>
        </div>
        <div className="sage-collaboration-stage">
          <article className="sage-collaboration-side sage-collaboration-left">
            <img src={sageEcomedLogo} alt="EcoMed 360" width="2914" height="537" loading="lazy" decoding="async" />
            <p className="eyebrow">OUR CONTRIBUTION</p>
            <h3>A secure digital foundation.</h3>
            <p>Protected data. Interoperable systems.<br />Intelligence that scales with care.</p>
          </article>
          <div className="sage-handshake-wrap">
            <img src={sageHandshake} alt="A handshake representing a shared mission" width="450" height="405" loading="lazy" decoding="async" />
          </div>
          <article className="sage-collaboration-side sage-collaboration-right">
            <img src={sageMmaatLogo} alt="MMAAT Enterprises Inc." width="230" height="100" loading="lazy" decoding="async" />
            <p className="eyebrow">OUR CONTRIBUTION</p>
            <h3>A network built for care.</h3>
            <p>Community-rooted infrastructure.<br />Care teams. Real-world impact.</p>
          </article>
          <span className="sage-collaboration-connector sage-collaboration-connector-left" aria-hidden="true" />
          <span className="sage-collaboration-connector sage-collaboration-connector-right" aria-hidden="true" />
          <div className="sage-joint-impact">
            <p className="eyebrow">OUR JOINT IMPACT</p>
            <h3>Stronger together.</h3>
            <p>One unified model delivering better outcomes<br className="sage-collaboration-desktop-break" /> for every patient, everywhere.</p>
            <ActionButton primary action={{ label: 'See How We Work Together', href: '/contact#contact-form' }} />
          </div>
        </div>
      </section>
      <section className="sage-community" id="sage-technology" aria-labelledby="sage-technology-heading">
        <div className="sage-community-layout">
          <div className="sage-community-copy">
            <p className="eyebrow">PROJECT SAGE</p>
            <h2 id="sage-technology-heading">Technology<br />Communities<br />Can Own.<br />Govern. Sustain.</h2>
            <p>Project SAGE extends beyond care delivery—unlocking sovereignty, building local capacity, and creating long-term opportunity for every community we serve.</p>
          </div>
          <div className="sage-community-visual" aria-hidden="true">
            <img src={sageKeyhole} alt="" width="390" height="500" loading="lazy" decoding="async" />
          </div>
          <ol className="sage-community-points">
            <li>
              <span className="sage-community-icon"><ShieldCheck size={42} strokeWidth={1.5} aria-hidden="true" /></span>
              <div><h3>Sovereign Data</h3><p>Communities control their data with privacy, security, and governance built-in.</p></div>
            </li>
            <li>
              <span className="sage-community-icon"><UsersRound size={42} strokeWidth={1.5} aria-hidden="true" /></span>
              <div><h3>Local Ownership</h3><p>Solutions are shaped, owned, and governed by the communities they serve.</p></div>
            </li>
            <li>
              <span className="sage-community-icon"><GraduationCap size={42} strokeWidth={1.5} aria-hidden="true" /></span>
              <div><h3>Workforce Development</h3><p>Investing in local talent to build digital skills, careers, and leadership for tomorrow.</p></div>
            </li>
            <li>
              <span className="sage-community-icon"><ChartNoAxesCombined size={42} strokeWidth={1.5} aria-hidden="true" /></span>
              <div><h3>Long-Term Opportunity</h3><p>Sustainable ecosystems that drive economic growth, resilience, and generational impact.</p></div>
            </li>
          </ol>
        </div>
      </section>
      <section className="sage-home" id="sage-home" aria-labelledby="sage-home-heading">
        <div className="sage-home-layout">
          <div className="sage-home-copy">
            <p className="eyebrow">PROJECT SAGE</p>
            <h2 className="sage-home-headline" id="sage-home-heading">Bringing Connected<br className="sage-home-desktop-break" /> Care Closer to Home<span className="sage-home-period">.</span></h2>
            <p>Project SAGE connects care teams, technology, and local communities—so the right care reaches people, wherever they call home.</p>
            <p className="sage-home-statement">A Future Where Geography No Longer Limits Care.</p>
            <div className="sage-home-actions">
              <ActionButton primary action={{ label: 'Contact Us', href: '/contact#contact-form' }} />
            </div>
          </div>
          <div className="sage-home-visual" aria-hidden="true">
            <img src={sageCommunityNetwork} alt="" width="1672" height="941" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>
      <SiteFooter activePage="sage" />
    </div>
  );
}

function App() {
  const compactLayout = window.matchMedia('(max-width: 820px)').matches;
  const sequenceRef = React.useRef(null);
  const backgroundRef = React.useRef(null);
  const firstSceneRef = React.useRef(null);
  const firstHeadlineRef = React.useRef(null);
  const firstCopyRef = React.useRef(null);
  const secondSceneRef = React.useRef(null);
  const activeRef = React.useRef(0);
  const [activeStep, setActiveStep] = React.useState(0);

  React.useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const compactLayout = window.matchMedia('(max-width: 820px)').matches;
    let lenis;
    let tickerCallback;
    const pointerCleanups = [];

    const context = gsap.context(() => {
      if (reduceMotion || compactLayout) {
        gsap.set([firstSceneRef.current, firstHeadlineRef.current, firstCopyRef.current, secondSceneRef.current, backgroundRef.current], { clearProps: 'all' });
        return;
      }

      lenis = new Lenis({
        lerp: 0.075,
        smoothWheel: true,
        wheelMultiplier: 0.86,
        anchors: true,
      });

      const onLenisScroll = () => ScrollTrigger.update();
      const onTick = (time) => lenis.raf(time * 1000);
      tickerCallback = onTick;
      lenis.on('scroll', onLenisScroll);
      gsap.ticker.add(onTick);
      gsap.ticker.lagSmoothing(0);

      gsap.set(secondSceneRef.current, { yPercent: 108 });
      gsap.set(firstCopyRef.current, { y: () => window.innerHeight * 0.82 });
      gsap.set(backgroundRef.current, { scale: 0.985, transformOrigin: 'center center' });

      const timeline = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: sequenceRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.05,
          invalidateOnRefresh: true,
          onUpdate: ({ progress }) => {
            const nextStep = progress < 0.68 ? 0 : 1;
            if (nextStep !== activeRef.current) {
              activeRef.current = nextStep;
              setActiveStep(nextStep);
            }
          },
        },
      });

      timeline
        .to(firstHeadlineRef.current, { yPercent: -118, duration: 0.66 }, 0.04)
        .to(firstCopyRef.current, { y: 0, duration: 0.56 }, 0.04)
        .to(backgroundRef.current, { scale: 0.93, yPercent: -1.2, duration: 1.7 }, 0)
        .to(firstSceneRef.current, { yPercent: -108, duration: 1 }, 0.7)
        .to(secondSceneRef.current, { yPercent: 0, duration: 1 }, 0.7);

      if (!window.matchMedia('(pointer: coarse)').matches) {
        gsap.utils.toArray('[data-magnetic]').forEach((element) => {
          const xTo = gsap.quickTo(element, 'x', { duration: 0.45, ease: 'power3.out' });
          const yTo = gsap.quickTo(element, 'y', { duration: 0.45, ease: 'power3.out' });
          const move = (event) => {
            const rect = element.getBoundingClientRect();
            xTo((event.clientX - rect.left - rect.width / 2) * 0.1);
            yTo((event.clientY - rect.top - rect.height / 2) * 0.1);
          };
          const leave = () => { xTo(0); yTo(0); };
          element.addEventListener('pointermove', move);
          element.addEventListener('pointerleave', leave);
          pointerCleanups.push(() => {
            element.removeEventListener('pointermove', move);
            element.removeEventListener('pointerleave', leave);
          });
        });
      }

      document.fonts.ready.then(() => ScrollTrigger.refresh());
    }, sequenceRef);

    return () => {
      pointerCleanups.forEach((cleanup) => cleanup());
      if (tickerCallback) gsap.ticker.remove(tickerCallback);
      lenis?.destroy();
      context.revert();
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#hero-content">Skip to Content</a>
      <main id="top" className="hero-sequence" ref={sequenceRef}>
        <div className="hero-sticky">
          <div className="background" ref={backgroundRef} aria-hidden="true">
            {!compactLayout && (
              <video
                className="background-video"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={molecularNetwork}
                tabIndex={-1}
                aria-hidden="true"
              >
                <source src={moleculeRotationVideo} type="video/mp4" />
              </video>
            )}
          </div>
          <Navigation />
          <div className="hero-container" id="hero-content">
            <HeroScene
              step={heroSteps[0]}
              index={0}
              active={activeStep === 0}
              sceneRef={firstSceneRef}
              headlineRef={firstHeadlineRef}
              copyRef={firstCopyRef}
            />
            <HeroScene step={heroSteps[1]} index={1} active={activeStep === 1} sceneRef={secondSceneRef} />
          </div>
          <span className="scroll-cue" aria-hidden="true"><span />Scroll to Explore</span>
        </div>
      </main>
      <AudienceSection />
      <PlatformSection />
      <DataFabricSection />
      <PartnerEcosystemSection />
      <SpecializedSection />
      <MissionSection />
      <LeadershipSection />
      <GlobeSection />
      <SiteFooter activePage="home" />
    </>
  );
}

const isAboutPage = window.location.pathname === '/about' || window.location.pathname === '/about-us';
const isContactPage = window.location.pathname === '/contact' || window.location.pathname === '/contact-us';
const isSagePage = window.location.pathname === '/sage' || window.location.pathname === '/project-sage';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>{isContactPage ? <ContactPage /> : isAboutPage ? <AboutPage /> : isSagePage ? <ProjectSagePage /> : <App />}</React.StrictMode>,
);
