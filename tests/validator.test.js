require('should');

const Person = require('../example/person');
const { ValidationError } = require('..');

describe('DTO Validation', () => {
  it('should succesfully validate object', async () => {
    try {
      const p = await new Person({
        name: 'John Doe',
        age: 25,
        email: 'john.doe@example.com',
      });
      p.age.should.equal(25);
      p.email.should.equal('john.doe@example.com');
    } catch (err) {
      throw err;
    }
  });
  it('should throw a validation error because of wrong email', async () => {
    try {
      await new Person({
        name: 'John Doe',
        age: 25,
        email: 'john.doe.example.com',
      });
    } catch (error) {
      if (error instanceof ValidationError) {
        error.field.should.equal('email');
        error.rule.should.equal('email');
      }
    }
  });
});
