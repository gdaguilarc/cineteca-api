class Url {
  private href: string;

  constructor(href: string) {
    this.href = href;
  }

  public getHref(): string {
    return this.href;
  }
  public setHref(href: string): void {
    this.href = href;
  }
}

export default Url;
