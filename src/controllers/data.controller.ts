import * as express from "express";
import { Request, Response } from "express";
import IControllerBase from "interfaces/IControllerBase.interface";
import Cineteca from "../models/cineteca.model";
import moment from "moment";

class DataController implements IControllerBase {
  public baseUrl: string = "http://www.cinetecanacional.net";
  public todayUrl: string = "/controlador.php?opcion=carteleraDia&dia=";
  public date: string;
  public path: string = "/";
  public router: express.Router = express.Router();

  //TODO: Handle date
  //TODO: Replace this fire for one service of web scrapping

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.get("/", this.index);
  }

  public index = async function(req: Request, res: Response) {
    res.setHeader("Content-Type", "application/json");
    let cineteca = new Cineteca(this.baseUrl + this.todayUrl);
    await cineteca.updateMovies();
    console.log(cineteca);
    res.send(JSON.stringify(cineteca.getMovies()));
  };
}

export default DataController;
