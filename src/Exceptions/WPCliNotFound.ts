class WPCliNotFound extends Error {
  constructor(message?: string) {
    super(message);
    this.setName("WP Cli is not installed");
  }

  public setName(name: string): void {
    this.name = name;
  }
}

export default WPCliNotFound;
