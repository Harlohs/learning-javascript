class Person {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting(){
    return `hello there ${this.firstName} ${this.lastName}`;
  }
}
// new class creating extends previous class
class Customer extends Person { // customer is sub to person
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName); // we do this because they were initalized in previous class

    this.phone = phone;
    this.membership = membership
  }

  static getMembershipCost() {
    return 500;
  }
}
console.log(Customer.getMembershipCost());
// console.log(person.getMembershipCost()); // this wont work since getMembershipCost is part of the cub class customer

const john = new Customer('john', 'doe', '555-555-5555', 'standard');

console.log(john);
console.log(john.greeting());