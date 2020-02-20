import App from "./app";

import * as bodyParser from "body-parser";
import loggerMiddleware from "./middleware/logger";
import DataController from "./controllers/data.controller";

const app = new App({
  port: 5000,
  controllers: [new DataController()],
  middleWares: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    loggerMiddleware
  ]
});

app.listen();
