'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';


const client = require('prom-client');

const app = express();

const requestCounter = new client.Counter({
  name: 'requests_total',
  help: 'Total number of requests received',
});


app.get('/', (req, res) => {
  requestCounter.inc();
  res.send('Hello! Nice to meet you!');
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics())
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
