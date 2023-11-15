import IValidator from "./ValidatorInterface";
import ProcessHandler from "../Process/ProcessHandler";
import PHPNotInstalled from "../Exceptions/PHPNotInstalled";

class PHPValidator extends IValidator {
  validate(): void {
    let result = ProcessHandler.createSync("php", ["--version"]);

    if (result.error) {
      this.setIsValid(false);
      throw new PHPNotInstalled();
    }
  }
}

export default PHPValidator;
