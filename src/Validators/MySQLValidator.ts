import MySqlNotInstalled from "../Exceptions/MySqlNotInstalled";
import ProcessHandler from "../Process/ProcessHandler";
import IValidator from "./ValidatorInterface";

class MySQLValidator extends IValidator {
  validate(): void {
    let result = ProcessHandler.createSync("mysql", ["--version"]);

    if (result.error) {
      this.setIsValid(false);
      throw new MySqlNotInstalled();
    }
  }
}

export default MySQLValidator;
