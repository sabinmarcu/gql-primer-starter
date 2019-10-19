import express from 'express';
import config from './config';
import server from './server';
import altair from './altair';

const app = express();
[server, altair].forEach(thing => thing.applyMiddleware({
  app,
}));

app.listen(config.port);
console.log(`Server running at ${config.port}`);
