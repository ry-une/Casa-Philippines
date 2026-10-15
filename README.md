# Casa Philippines


A static bakery website built with **HTML, CSS, and Bootstrap 5.3.0**.


## Project guide


| File | Purpose |
| :--- | :--- |
| [index.html](index.html) | Home page and featured cookie image |
| [about.html](about.html) | Bakery information, store hours, and team section |
| [menu.html](menu.html) | Cookie listings, prices, and image carousel |
| [contact.html](contact.html) | Demonstration contact form |
| [styles.css](styles.css) | Shared styling |
| [images/](images/) | Website image assets |


Additional images also exist in the repository root.


## View locally


Download or clone the repository and open `index.html` in a browser. Keep the folder structure intact so relative links and images resolve. Internet access is required for Bootstrap CDN and Google Fonts resources.


## Scope and limitations


- Static front end with responsive Bootstrap layouts, navigation, and a carousel.
- The contact form uses `action="#"`; no message-delivery backend is included.
- Online ordering and payments are not implemented.
- Cross-browser behavior and accessibility have not been verified as part of this documentation update.


## Browser review checklist

These are proposed manual checks, not completed test results. Use synthetic values in the demonstration form.

| Area | Check |
| :--- | :--- |
| Navigation | Open each page and follow its navigation links; confirm the intended local page loads. |
| Assets | Check every page for missing images, broken styles, and failed external resources. |
| Responsive layout | Inspect narrow mobile and wide desktop widths for horizontal overflow, clipped text, and usable navigation. |
| Keyboard access | Move through links, carousel controls, and form inputs with the keyboard; check visible focus and logical order. |
| Carousel | Exercise available previous/next controls and verify that the expected image changes. |
| Contact form | Inspect labels and validation with synthetic input. Submission is a front-end demonstration and does not deliver a message. |
| External dependencies | Observe the page with CDN or font requests unavailable and record any lost styling or functionality. |

Record the commit, browser/version, viewport, scenario, expected and observed results, and status (not run / pass / fail / blocked). Capture screenshots only after removing personal input. A completed checklist is a limited manual review, not an accessibility conformance claim.

---


Developer: Ryan Maderas.

