import { Command } from "commander";
import ACommand from "../Commands/ACommand";
import InitCommand from "../Commands/InitCommand";

class CommandFactory {
  program: Command;
  commandInstances: Array<ACommand> = [];
  commandList: Array<any> = [InitCommand];

  constructor() {
    this.program = new Command();
    this.initCommands();
  }

  /**
   * Get program instance
   * @returns Returns Command Instance
   */
  public getProgram(): Command {
    return this.program;
  }

  /**
   * Initialize all Commands
   */
  public init() {
    if (!this.commandInstances.length) {
      return;
    }

    this.commandInstances.map((commandInstance, index) => {
      if (!commandInstance) {
        return;
      }

      this.program
        .command(commandInstance.getName())
        .description(commandInstance.getDescription())
        .action(commandInstance.action);
    });
  }

  /**
   * Initialize Command Objects
   * @returns
   */
  public initCommands(): void {
    if (!this.commandList) {
      return;
    }

    this.commandList.map((className) => {
      if (!className) return;

      this.commandInstances.push(new className());
    });
  }
}

export default CommandFactory;
