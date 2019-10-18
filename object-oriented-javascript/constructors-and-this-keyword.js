// person constructor
function Person(name, dob){ // the overall look of this object creates a consstructor
  this.name = name; // this refers to the current instant of the object | here we are using this to define the person name|
  // this.age = age;
  this.birthday = new Date(dob); 
  this.calculateAge = function(){ // this creates a method
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
} // this is when the constructor ends

//console.log(this) // | using this in global gives you the window object |

// const brad = new Person('brad', 20);
// const john = new Person('john', 32);

const brad = new Person('Brad', '9-10-1996');
console.log(brad.calculateAge()); /*function so these inner parenthesis are needed*/
