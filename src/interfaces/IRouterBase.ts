import * as express from 'express';

interface IRouterBase {
  initRoutes(): any;
  getRouter(): express.Router;
}

export default IRouterBase;
