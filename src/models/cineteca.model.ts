import Movie from "./movie.model";
import * as cheerio from "cheerio";
import * as rp from "request-promise";

class Cineteca {
  private url: string;
  private movies: [Movie];

  /**
   *
   */
  constructor(url: string) {
    this.url = url;
  }

  public getMovies(): [Movie] {
    return this.movies;
  }

  public setMovies(movies: [Movie]): void {
    this.movies = movies;
  }

  public async updateMovies(): Promise<[Movie]> {
    const rawData = await rp.get(this.url, { encoding: "utf-8" });
    const data = cheerio.load(rawData);

    let movies = [];

    await data("#contenedorPelicula")
      .get()
      .map(cont => {
        const container = data(cont);
        const title = container.find(data(".peliculaTitulo")).text();
        const sinopsis = container.find(data(".peliculaSinopsis")).text();
        console.log(`titulo: ${title} \n sinopsis: \n ${sinopsis}`);
        return title;
        //new Movie();
      });

    //console.log(data("#contenedorPelicula").get());

    return this.movies;
  }
}

export default Cineteca;
