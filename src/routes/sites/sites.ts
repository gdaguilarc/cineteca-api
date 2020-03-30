import * as express from 'express';
import { Request, Response } from 'express';
import IRouterBase from '../../interfaces/IRouterBase';

class SitesRouter implements IRouterBase {
  private router: express.Router = express.Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.get('/', this.index);
  }

  public getRouter() {
    return this.router;
  }

  // TODO: Establish the main routes
  public index = async function(req: Request, res: Response) {
    res.send('Hola Mundo');
  };
}

export default SitesRouter;
