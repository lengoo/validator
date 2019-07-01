const Validator = require('../lib/validator');
const rules = require('./rules');

class Person extends Validator {
  constructor({ name, age, email }) {
    super({ name, age, email }, rules);
  }
}

module.exports = Person;
