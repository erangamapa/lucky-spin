# lucky spin

A single page sic bo table in plain html css and js. No build step and no dependencies, open index.html and play.

What it does

- a live dealer style table with a full round loop, betting window, no more bets, shake, result and payout
- three css 3d dice tumbling inside a glass dome
- chip rack with flying chips, undo and a running balance
- every sound effect is synthesized with the web audio api, chip clicks, dice rattle, win fanfares
- a looped music bed lives in js/music.js as base64 so the page also works from a local file

The dealer is a single inline svg with css poses and a blink loop. Payouts follow the usual macau table, triples pay 180 to 1 and the totals scale from 60 to 1 at the edges down to 6 to 1 in the middle.
