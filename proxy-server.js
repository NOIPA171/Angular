const express = require("express");
const path = require("path");

function getTranslatedServer(lang) {
  const distFolder = path.join(process.cwd(), `dist/angular/server/${lang}`);
  const server = require(`${distFolder}/main.js`);
  return server.app(lang);
}

function run() {
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const appEn = getTranslatedServer("en");
  const appTw = getTranslatedServer("tw");
  const server = express();
  server.use("/tw", appTw);
  server.use("/en", appEn);
  server.use("", appEn);
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
