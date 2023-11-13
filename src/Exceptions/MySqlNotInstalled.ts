class MySqlNotInstalled extends Error {
  name: string = "";
  message: string = "";
  stack?: string | undefined;

  constructor(message?: string) {
    super(message);
    this.setName("MySQL Server is not running");
  }

  public setName(name: string): void {
    this.name = name;
  }
}

export default MySqlNotInstalled;
