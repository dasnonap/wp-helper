import { exec } from "node:child_process";

class MySQLValidator implements Validator {
  isValid: boolean;

  constructor() {
    this.isValid = true;
  }

  async validate(): Promise<void> {
    try {
      const childProcess = await exec(
        "mysql --versionss",
        (error, output, stderr) => {
          if (error != null && stderr.length) {
            throw new Error("MySQL server is not installed!");
          }
          this.isValid = false;
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  getIsValid(): boolean {
    return this.isValid;
  }
}

export default MySQLValidator;
