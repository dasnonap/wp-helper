import ACommand from "./ACommand";

class InitCommand extends ACommand {
  // Constructor
  constructor() {
    super();

    this.setName("init");
    this.setDescription(
      "Use init command to initialize your Wordpress Instance"
    );
  }

  /**
   * Handle Init Command Action
   */
  public action() {
    console.log("test action yey");
  }
}

export default InitCommand;
