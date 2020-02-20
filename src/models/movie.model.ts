import Image from "./Image.model";
import Url from "./Url.model";

class Movie {
  private id: string;
  private url: Url;
  private title: string;
  private time: string;
  private sinopsis: string;
  private img: Image;
  private youtube: string;

  /**
   *
   */
  constructor(
    id: string,
    url: Url,
    title: string,
    time: string,
    sinopsis: string,
    img: Image,
    youtube: string
  ) {
    this.id = id;
    this.url = url;
    this.title = title;
    this.time = time;
    this.sinopsis = sinopsis;
    this.img = img;
    this.youtube = youtube;
  }

  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public getUrl(): Url {
    return this.url;
  }

  public setUrl(url: Url): void {
    this.url = url;
  }

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public getTime(): string {
    return this.time;
  }

  public setTime(time: string): void {
    this.time = time;
  }

  public getSinopsis(): string {
    return this.sinopsis;
  }

  public setSinopsis(sinopsis: string): void {
    this.sinopsis = sinopsis;
  }

  public getYoutube(): string {
    return this.youtube;
  }

  public setYoutube(youtube: string): void {
    this.youtube = youtube;
  }

  public getImage(): Image {
    return this.img;
  }

  public setImage(img: Image) {
    this.img = img;
  }
}

export default Movie;
