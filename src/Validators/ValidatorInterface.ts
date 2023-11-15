abstract class IValidator {
  // Store valid state
  isValid: boolean = true;

  constructor() {}

  // Throws exception if issues
  validate(): void {}

  // Get isValid
  getIsValid(): boolean {
    return this.isValid;
  }

  // Set isValid
  setIsValid(state: boolean): any {
    this.isValid = state;
  }
}

export default IValidator;
