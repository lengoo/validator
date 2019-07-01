class ValidationError extends Error {
  constructor(message, field, rule) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
    this.rule = rule;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ValidationError);
    }
  }
}

module.exports = ValidationError;
