# Design Review: Connected Data Fabric

Reviewed against: user-provided Connected Data Fabric reference (`codex-clipboard-76033725-39cd-4160-9e10-e7c22e861540.png`)

Philosophy: cinematic healthcare data convergence with restrained technical depth

Date: 2026-08-05

## Screenshots Captured

| Screenshot | Breakpoint | Description |
| --- | --- | --- |
| `screenshots/review-data-fabric-desktop-1680.png` | Desktop 1680×945 | Reference-size opening state |
| `screenshots/review-data-fabric-merge-desktop-1680.png` | Desktop 1680×945 | Convergence state |
| `screenshots/review-data-fabric-final-desktop-1680.png` | Desktop 1680×945 | Unified patient profile |
| `screenshots/review-data-fabric-desktop-1280.png` | Desktop 1280×800 | Narrow desktop adaptation |
| `screenshots/review-data-fabric-tablet-768.png` | Tablet 768×1024 | Compact card deck |
| `screenshots/review-data-fabric-mobile-375.png` | Mobile 375×812 | Mobile opening state |

## Summary

Card geometry now follows the supplied reference instead of rotating the entire interface. Frames use a shallow skew while internal content stays upright, and each successive card scales down to create controlled depth. At the 1680×945 reference size, the first card measures 171×421 at x793/y255 and the fifth measures 147×362 at x1485/y345, closely matching the reference composition.

## Must Fix

None found in the requested card-shape and convergence scope.

## Should Fix

None found after desktop, tablet, mobile, forward-scroll, reverse-scroll, and overflow checks.

## Could Improve

1. Replace the procedural imaging placeholders with approved clinical imagery if dedicated assets become available.

## What Works Well

The opening deck now reads as five distinct sources receding through depth. During scroll, the skew and depth flatten while the cards converge, the unified patient profile appears inside the stack, and the source cards dissolve without a late pop-in.
