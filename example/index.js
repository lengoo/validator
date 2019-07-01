const Person = require('./person');

(async () => {
  try {
    const p = await new Person({
      name: 'John Doe',
      email: 'john@doe.com',
      age: 65,
    })
    console.log(p);
  } catch (error) {
    console.log(error);
  }
})();
