import IValidator from "./ValidatorInterface";
import ProcessHandler from "../Process/ProcessHandler";
import WPCliNotFound from "../Exceptions/WPCliNotFound";

class WPCliValidator extends IValidator {
  validate() {
    let result = ProcessHandler.createSync("wp");

    if (result.error) {
      throw new WPCliNotFound();
    }
  }
}

export default WPCliValidator;
