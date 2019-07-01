const { validate } = require('indicative');
const ValidationError = require('./error');

class Validator {
  constructor(obj, rules = {}) {
    return new Promise((resolve, reject) => {
      if (!rules) {
        resolve(obj);
      }
      validate(obj, rules)
        .then(() => {
          resolve(obj);
        })
        .catch((errors) => {
          const { message, field, validation: rule } = errors[0];
          reject(new ValidationError(message, field, rule));
        });
    });
  }
}

module.exports = Validator;
