class PHPNotInstalled extends Error {
  constructor(message?: string) {
    super(message);
    this.setName("PHP is not installed.");
  }

  public setName(name: string): void {
    this.name = name;
  }
}

export default PHPNotInstalled;
