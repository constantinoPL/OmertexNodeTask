const fetch = require('node-fetch');

const latency = async (req, res) => {
  const start = Date.now();
  const { token } = req.body;
  await fetch('https://www.google.com/');

  const end = Date.now();

  const lat = end - start;

  res.json({ latency: lat, token });
};

module.exports = latency;
