# About Page Override

## Source of truth

The supplied About Us references and `MASTER.md` govern this page. Keep the homepage's Manrope typography, midnight navy palette, cyan/lime action language, shared container, and restrained transform-only motion.

## Composition

- Sticky molecular background spans the first two viewport states.
- State one: centered, editorial introduction with tracked cyan eyebrow, three-line display heading, supporting paragraph, and paired pill actions.
- State two: the supplied “WHY WE EXIST” split layout, with the emphasized two-part headline on the left and three explanatory paragraphs on the right; the brighter molecular detail remains visible on the right edge.
- State three: solid deep-navy Mission/Vision section after the image sequence releases, using the supplied trademark as the centered mark and faint oversized “MISSION” / “VISION” background typography.
- State four: reuse the homepage Leadership team section.
- Final CTA: centered “WHAT COMES NEXT” close with molecular background, two-line heading, supporting copy, and Request a Demo / Partner With Us actions.
- Use a normalized scroll timeline so state transitions are reversible and deterministic.

## Motion

- Lenis + GSAP ScrollTrigger, matching the homepage (`lerp: 0.075`, `scrub: 1.05`).
- Background transform starts near `scale(0.985)` and settles near `scale(0.93)` with a restrained vertical drift.
- First content exits upward while second content rises from below.
- Under `prefers-reduced-motion`, remove pinning/scrubbing and keep both content states in normal document flow.

## Responsive behavior

- Desktop uses centered state one and split left-led state two.
- Tablet/mobile stack each state vertically while retaining the same background focal point and pill controls.
- Preserve 44px minimum targets, visible focus rings, safe-area padding, and no horizontal overflow.
