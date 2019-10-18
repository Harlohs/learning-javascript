// person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// person greeting
Person.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}`;
}
 
const person1 = new Person('john', 'Doe');

console.log(person1);

console.log(person1.greeting());

//===========================================================================================

//customer constructor
function Customer(firstName, lastName, phone, membership){
  Person.call(this, firstName, lastName); // call is a function that lets you call another function from somewhere else in the doc
  
  this.phone = phone;
  this.membership = membership;
}

// inherit the person protype methods
Customer.prototype = Object.create(Person.prototype); // allows us to inherit parts of the person constructor to customer

//make customer.prototype return customer()
Customer.prototype.constructor = Customer // this changes the person constructor to return customer for customer constructors

//create customer
const customer1 = new Customer('tom', 'smith', '555-555-5555', 'standard');

console.log(customer1);

// customer greeting
Customer.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
}


console.log(customer1.greeting())