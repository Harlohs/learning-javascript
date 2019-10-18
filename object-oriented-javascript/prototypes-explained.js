//prototypes are also objects
//Object.prototype | Person.prototype |

// person constructor
function Person(firstName, lastName, dob){ 
  this.firstName = firstName; 
  this.lastName = lastName; 
  this.birthday = new Date(dob); 
  // this.calculateAge = function(){ 
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

//calculate age | this is a prototype method |
Person.prototype.calculateAge = function(){  // this will move the age into the prototype
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// get full name
Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`;
}

//gets married | manipulate prototype data |
Person.prototype.getsMarried = function(newLastName){
  this.lastName = newLastName;
}

const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'johnson', 'march 20 1978');

console.log(mary); //open dev console and find __proto__

console.log(john.calculateAge()); 
console.log(mary.getFullName()); 

mary.getsMarried('smith');

console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullName')); //not a property in Person.constructor so it comes back false