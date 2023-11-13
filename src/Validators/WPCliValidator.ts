import IValidator from "./ValidatorInterface";
import ProcessHandler from "../Process/ProcessHandler";
import WPCliNotFound from "../Exceptions/WPCliNotFound";

class WPCliValidator implements IValidator {
  isValid: boolean = false;

  constructor() {
    this.setIsValid(true);
  }

  validate() {
    let result = ProcessHandler.createSync("wp");

    if (result.error) {
      throw new WPCliNotFound();
    }
  }

  getIsValid(): boolean {
    return this.isValid;
  }

  setIsValid(state: boolean): void {
    this.isValid = state;
  }
}

export default WPCliValidator;
