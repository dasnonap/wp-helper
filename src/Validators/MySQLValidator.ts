import MySqlNotInstalled from "../Exceptions/MySqlNotInstalled";
import ProcessHandler from "../Process/ProcessHandler";
import IValidator from "./ValidatorInterface";

class MySQLValidator implements IValidator {
  isValid: boolean;

  constructor() {
    this.isValid = true;
  }

  validate(): void {
    let result = ProcessHandler.createSync("mysql", ["--version"]);

    if (result.error) {
      this.setIsValid(false);
      throw new MySqlNotInstalled();
    }
  }

  getIsValid(): boolean {
    return this.isValid;
  }

  setIsValid(isValid: boolean): void {
    this.isValid = isValid;
  }
}

export default MySQLValidator;
