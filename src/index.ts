// TODO: Read docs and optimize imports
import * as express from 'express';
import * as path from 'path';
import * as sassMiddleware from 'node-sass-middleware';

import App from './app';

// Dotenv
require('dotenv').config();

// NPM Middleware
import * as bodyParser from 'body-parser';

// Personalized Middleware
import loggerMiddleware from './middleware/logger';

// Router
import MainRouter from './routes';

const app = new App({
  port: Number(process.env.APP_PORT),
  mainRouter: new MainRouter(),
  middleWares: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    express.static(path.join(__dirname, 'public')),
    sassMiddleware({
      src: __dirname,
      dest: path.join(__dirname, 'public'),
      debug: true,
      outputStyle: 'compressed'
    }),
    loggerMiddleware
  ]
});

app.listen();
