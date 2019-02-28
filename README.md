# twdne.js

A simple library for getting a waifu from thiswaifudoesnotexist.net

## Usage

```js
const twdne = require('twdne.js');

// Randomly selects one
twdne.randomWaifu().then(({desc, img}) => {
  console.log(`Waifu Image URL: ${img}`);
  console.log(desc);
});

// Pulls a selected waifu by it's ID.
twdne.fetchWaifu(21566).then(({desc, img}) => {
  console.log(`Waifu Image URL: ${img}`);
  console.log(desc);
});
```
