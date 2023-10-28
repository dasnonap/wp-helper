# General Structure

- src - Contains all code structure for CLI
  - Validators - Validation before using Third-party Commands e.g. - wp/php/mysql - Required Validation before executing every command
  - Commands - Create all Commands provided from the API
  - Options - Provide all Options for each command
  - Tests - test use cases of the
  - Helpers - helper functions
  - Exceptions - different Exceptions

---

## Validators

- Validator - interface

  - Params
    - private Boolean isValid
  - Methods
    - public function validate()
    - public function isValid()
