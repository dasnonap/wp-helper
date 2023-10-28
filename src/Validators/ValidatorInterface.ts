interface Validator {
  // Store valid valid
  isValid: boolean;

  // Throws exception if issues
  validate(): void;

  // Get isValid
  getIsValid(): boolean;
}
