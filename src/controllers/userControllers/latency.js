const fetch = require('node-fetch');

const latency = async (req, res) => {
  const start = Date.now();

  await fetch('https://www.google.com/');

  const end = Date.now();

  const lat = end - start;

  res.json({ latency: lat });
};

module.exports = latency;
