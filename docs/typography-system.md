# EcoMed 360 typography system

All pages use **Manrope** and the shared roles below. Section CSS may control
layout, width, and spacing, but it must not invent a new type size for an
existing role.

| Role | Desktop | Mobile | Weight | Use |
| --- | --- | --- | --- | --- |
| Display / hero | 64px / 69px | 40px / 44px | 600 | Page-entry and hero headlines |
| Section | 52px / 55px | 36px / 42px | 600 | Main section headlines |
| Card / feature | 31px / 37px | 22px / 27px | 600 | Feature, solution, contribution, and profile titles |
| Lead | 23px / 38px | 18px / 29px | 500 | Hero and page-introduction copy |
| Body | 18px / 29px | 16px / 25px | 500 | Main explanatory paragraphs |
| Compact | 16px / 25px | 15px / 23px | 500 | Dense cards, metadata, and supporting detail |
| Eyebrow | 14px / 20px | 12px / 17px | 600 | Uppercase section labels |
| Caption | 12px / 16px | 12px / 16px | 500 | Metadata and footer detail |
| Navigation / CTA | 16px / 22px | 16px / 22px | 600 | Navigation links and action labels |

The variables live at the top of `src/styles.css`, with the mobile values in
the single `max-width: 820px` root block. The global contract at the end of
that file maps Home, About, Contact, and Project Sage selectors to these
roles. New content should use the closest existing role instead of adding a
section-specific `font-size` or `line-height` override.
