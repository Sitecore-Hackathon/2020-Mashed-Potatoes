/* global globalThis */
const express = require('express');
const next = require('next');

const envConfig = process.env.NODE_ENV || 'development';
const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dev,
  dir: __dirname,
});

const handle = app.getRequestHandler();

require('dotenv').config();

if (dev) {
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
}

app
  .prepare()
  .then(() => {
    const server = express();

    globalThis.sitecoreInstanceUrl = process.env['SITECORE_URL'];
    globalThis.sitecoreApiKey = process.env['SITECORE_API_KEY'];
    globalThis.sitecoreDefaultLang = process.env['SITECORE_DEFAULT_LANG'];

    const portNumber = process.env.PORT || 3000;

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(portNumber, (err) => {
      if (err) {
        throw err;
      }
      /* eslint-disable no-console */
      console.log(`> Ready on environment ${envConfig} http://localhost:${portNumber}`);
    });
  })
  .catch((ex) => {
    /* eslint-disable no-console */
    console.error(ex.stack);
    process.exit(1);
  });
