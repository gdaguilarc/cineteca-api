import * as express from 'express';
import IRouterBase from '../interfaces/IRouterBase';
import SitesRouter from './sites';

class MainRouter implements IRouterBase {
  private router: express.Router = express.Router();

  // TODO: Create a Json File and import it
  public routes: [{ routerInstance: IRouterBase; path: string }] = [
    { routerInstance: new SitesRouter(), path: '/sites' }
  ];

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.routes.forEach(router => {
      this.router.use(router.path, router.routerInstance.getRouter());
    });
  }

  public getRouter() {
    return this.router;
  }
}

export default MainRouter;
