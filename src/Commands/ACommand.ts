abstract class ACommand {
  private name: string = "";
  private description: string = "";

  constructor() {}

  public action() {}

  public setName(name: string) {
    this.name = name;
  }

  public setDescription(description: string) {
    this.description = description;
  }

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }
}

export default ACommand;
