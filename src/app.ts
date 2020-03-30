import * as express from "express";
import { Application } from "express";
import * as hbs from "express-handlebars";
import IRouterBase from "interfaces/IRouterBase";

class App {
  public app: Application;
  public port: number;

  constructor(appInit: {
    port: number;
    middleWares: any;
    mainRouter: IRouterBase;
  }) {
    this.app = express();
    this.port = appInit.port;

    this.middlewares(appInit.middleWares);
    this.routes(appInit.mainRouter);
    this.assets();
    this.template();
  }

  private middlewares(middleWares: {
    forEach: (arg0: (middleWare: any) => void) => void;
  }) {
    middleWares.forEach(middleWare => {
      this.app.use(middleWare);
    });
  }

  private routes(mainRouter: IRouterBase) {
    this.app.use("/", mainRouter.getRouter());
  }

  private assets() {
    this.app.use(express.static("public"));
    this.app.use(express.static("views"));
  }

  private template() {
    this.app.set("view engine", "pug");
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the http://localhost:${this.port}`);
    });
  }
}

export default App;
