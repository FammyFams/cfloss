# cfloss.com design

Waitlist page built from the `waitlist-page` skill structure (nexu-io/open-design): logo top-left, one big headline, one email form, a decorative lower band, and a ticker.

## Color
| Token | Value | Use |
|---|---|---|
| `--bg` | `#EAF7F0` | Page background (mint white) |
| `--fg` | `#0F2A24` | Text, button, ticker background (deep green-black) |
| `--muted` | `#3F5751` | Secondary text |
| `--mint` | `#7EE8C0` | Logo tile, ticker dots, text selection |
| `--deco` | `#9FE5C7` | Lower band fill |
| `--deco-stripe` | `#2FBF88` | Stripe above the band |
| `--deco-stroke` | `rgba(15, 42, 36, 0.14)` | Grid lines |
| `--input-border` | `rgba(15, 42, 36, 0.32)` | Email field border |
| `--success` | `#1D6B52` | Success message |
| `--error` | `#B42318` | Error message |

## Type
- Display: **Archivo Expanded ExtraBold** (wdth 125, wght 800), self-hosted. Headline and wordmark only.
- Body: **Hanken Grotesk**, self-hosted.
- Both are OFL; licenses in `fonts/`.

## Rules
- One call to action: the email form. The only other link is Privacy.
- No countdowns, signup counts, emoji, or gradients.
- Never show or describe the floss pick's shape (patent pending). The wavy line is a floss strand, not the product; avoid semicircle or arch motifs.
- The waitlist page keeps its CSS and JS inline so a cached stylesheet can never mismatch new HTML. Shared files are linked with `?v=` versions.
