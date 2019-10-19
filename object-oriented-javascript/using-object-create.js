// a different way of creating objects
const personPrototypes = {
  greeting: function() {
    return `hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName){
    this.lastName = newLastName;
  }
}

const mary = Object.create(personPrototypes); // makes mary a sub object to personProtypes
mary.firstName = 'Mary';
mary.lastName = 'Williams'
mary.age = 30;

console.log(mary.greeting());

mary.getsMarried('Thompson');
console.log(mary.greeting());

const brad = Object.create(personPrototypes, { // makes brad a sub object to personProtypes
 firstName: {value: 'Brad'},
 lastName: {value: 'Traversy'},
 age: {value: 36}
});

console.log(brad)

console.log(brad.greeting());