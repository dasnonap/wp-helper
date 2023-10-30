import { ChildProcess, spawnSync } from "node:child_process";

class MySQLValidator implements Validator {
  isValid: boolean;

  constructor() {
    this.isValid = true;
  }

  validate(): void {
    const result = spawnSync("mysql", ["--versions"]);
    const stdout = result.stdout.toString();
    const error = result.stderr.toString();

    if (error) {
      this.isValid = false;
      throw new Error("Throw generic error");
    }
  }

  getIsValid(): boolean {
    return this.isValid;
  }
}

export default MySQLValidator;
