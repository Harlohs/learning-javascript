//defines object literal | variable = {} |
const person = {
  firstName: 'Stewie',
  lastName: 'Smoke Criminal',
  age: 21,
  email: 'mr2k@gmail.com',
  hobbies: ['video game', 'being sassy'],
  address: {
    city: 'LA',
    state: 'CA'
  },
  getBirthyear: function(){
    return 2019 - this.age; // 2019 minus age = birthyear
  }
};

let val;
val = person;

// get specific value from object | value.object |
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1]; // gives us the second hobby on list
val = person.address.city;
val = person.getBirthyear();

console.log(val);

const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 20},
  {name: 'Stewie', age: 21}
];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}