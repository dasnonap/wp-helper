import ProcessHandler from "../Process/ProcessHandler";
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
    // CWD, wp , copy, modify
    ProcessHandler.createSync('wp core download');
  }
}

export default InitCommand;
