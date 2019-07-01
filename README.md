# Lengoo validator

Validation component part of lengoo custom toolset for building NodeJS applications.

## Getting Started

The lengoo validator component is intended for performing validations when creating a Data Transmission Object (DTO). Instead of relying on controllers or the database itself, the target is to validate the objects before storing them in the database and avoid inconsistencies in the data stored. This package is based on [indicative](https://indicative.adonisjs.com/), part of [AdonisJS](https://adonisjs.com/)

### Installing

Run the following command:

```
yarn add @lengoo/validator
```

## Running the tests

To test the library, run:

```
yarn test
```

## Usage

The library exposes two classes, `Validator` and `ValidationError`, if you want to create a validable object, you have to declare a class extending `Validator`, check the example below for more information:

```javascript
const Validator = require("../lib/validator");
const rules = require("./rules");

class Person extends Validator {
  constructor({ name, age, email }) {
    super({ name, age, email }, rules);
  }
}

module.exports = Person;
```

A set of rules are required in order to validate, if the rules map is empty, the object will be returned as-it-is without performing validations.

An example of this rules as described below:

```javascript
module.exports = {
  name: "required|min:3|max:10",
  email: "required|email",
  age: "required|under:90"
};
```

The rules are based on [indicative](https://indicative.adonisjs.com/) and a full reference can be found [here](https://indicative.adonisjs.com/).

After defining the rules for your DTO, then you can proceed to use it as following:

```javascript
try {
  const p = await new Person({
    name: "John Doe",
    email: "john@doe.com",
    age: 65
  });
  console.log(p);
} catch (error) {
  console.log(error);
}
```

After instantiating the class defined before, if there is some validation error, a `ValidationError` will be thrown, this error contains, in addition to the built-in properties, `field` and `rule`, which gives more insight which field and rule raised the exception.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc
