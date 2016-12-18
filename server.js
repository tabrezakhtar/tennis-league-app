'use strict';

const express = require('express');
const routes = require('./routes');

const app = express();
app.use('/', routes);

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('App listening at http://%s:%s', host, port);
});

// routes(app);
