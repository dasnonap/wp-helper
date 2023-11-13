interface IValidator {
  // Store valid state
  isValid: boolean;

  // Throws exception if issues
  validate(): void;

  // Get isValid
  getIsValid(): boolean;

  // Set isValid
  setIsValid(state: boolean): any;
}

export default IValidator;
