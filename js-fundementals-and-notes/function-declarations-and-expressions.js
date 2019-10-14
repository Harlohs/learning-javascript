// FUNCTION DECLARATION
/*
  function greet(parameter = 'defines default', parameter = 'defines default'){
    function scope
  }
*/

function greet(firstName = 'John', lastName = 'Doe'){

  // older way of doing above code
  // if(typeof firstName === 'undefined'){firstName = "john"}
  // if(typeof lastName === 'undefined'){lastName = "doe"}

  //console.log('hello');
  return 'hello ' + firstName + ' ' + lastName;
}

// console.log(greet('john','Doe'));


//=================================================================================================
// FUNCTION EXPRESSION

const square = function (x = 3){
  return x*x;
};
console.log(square());

console.log(square(8)); // changed the 3 to 8


//=================================================================================================
// IMMIDIATELY INVOKEABLE FUNCTION EXPRESSION - IIFEs
// a function you declare and run at the same time

// (function(){
//   console.log('IIFE ran..');
// })();

(function(name){
  console.log('hello ' + name);
})('Jeff');

//=================================================================================================
// PROPERTY METHODS

const todo = {
  add: function(){
    console.log('add todo..');
  },
  edit:function(id){
    console.log(`edit todo ${id}`);
  }
}

todo.delete = function(){
  console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();