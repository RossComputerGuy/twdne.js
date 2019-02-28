const assert = require('assert').ok;
const request = require('request-promise');

const MAX_WAIFUS = 100000;

const randomID = () => Math.floor(Math.random() * MAX_WAIFUS);

const fetchDescription = (id) => request(`https://www.thiswaifudoesnotexist.net/snippet-${id}.txt`);
const fetchImage = (id) => Promise.resolve(`https://www.thiswaifudoesnotexist.net/example-${id}.jpg`);

const fetchWaifu = async (id) => {
  assert(id >= 0 && id < MAX_WAIFUS, 'ID is out of range.');
  const desc = await fetchDescription(id);
  const img = await fetchImage(id);
  return {desc, img};
};

module.exports = {
  randomWaifu: () => fetchWaifu(randomID()),
  fetchWaifu
};
// vim:set ts=2 sw=2 et:
