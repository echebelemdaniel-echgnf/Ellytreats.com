# Ellytreats Website

A simple website for Ellytreats, a cake and soup business in Port Harcourt, Rivers State, Nigeria. Customers can see prices, build an order and send it to the business on WhatsApp.

## Files

| File | What it does |
|------|--------------|
| `index.html` | The page content (sections, headings, forms) |
| `style.css` | The design: colors, fonts, layout |
| `script.js` | Prices, the cart and the WhatsApp order message |

Keep all three files in the same folder.

## How to view it

Open `index.html` in any web browser. No installation is needed. An internet connection is needed to load the fonts.

## Features

- Cake price calculator (6 to 12 inches, butter cream, whipped cream, fondant)
- Cart for cakes and soups, with writing on the cake and soup by the litre
- Order form: name, phone, date needed, pickup or delivery
- "Send order on WhatsApp" button that sends the full order as a message
- Full price table, budget cakes and soup prices
- Works on phones and computers, with automatic dark mode

## How to change prices

Open `script.js`. The prices are at the top:

- `cakes`: price per size as `[butter cream, whipped cream, fondant]`. Use `null` when a size has no option.
- `budget`: budget cake prices
- `soups`: soup names and price per litre

Change the numbers, save, and refresh the page.

## How to change the phone number

In `script.js`, find `2348089221013` and replace it with the new number in international format, without `+` or spaces. In `index.html`, update the phone number and Instagram handle in the footer.

## How to change colors

Open `style.css`. The colors are listed at the very top under `:root`. Change the hex values there.

## How to put it online

Upload all three files to any static host, for example Netlify Drop, Cloudflare Pages or GitHub Pages. A custom domain such as ellytreats.com can be connected in the host's domain settings.

## Notes

- Orders are sent through WhatsApp. Nothing is stored on the website and no online payment is taken.
- To add online payment, a Paystack or Flutterwave account would be needed.
- Check these prices with the owner: the soup prices that read "28,00" and "30,00" on the original flyer (entered as 28,000 and 30,000), and the 6-inch fondant price, which was not listed.

## Contact

Ellytreats, Port Harcourt, Rivers State
Phone and WhatsApp: 08089221013
Instagram: @ellytreats
