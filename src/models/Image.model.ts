class Image {
  private href: string;
  private path: string;

  public constructor(href: string, path: string) {
    this.href = href;
    this.path = path;
  }

  public getHref(): string {
    return this.href;
  }

  public setHref(href: string): void {
    this.href = href;
  }

  public getPath(): string {
    return this.path;
  }

  public setPath(path: string): void {
    this.path = path;
  }
}

export default Image;
