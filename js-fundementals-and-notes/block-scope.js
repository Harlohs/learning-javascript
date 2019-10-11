// Global scope
var a = 1;
let b = 2;
const c = 3;

// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function sctop: ', a, b, c);
// }
// test();

  //block scope
// if(true) {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('block scope: ', a, b, c);
// }

for(let a = 0; a < 10; a++){
  console.log(`Loop: ${a}`);
}

console.log('global scope: ', a, b, c);


// dont use var, it isnt as good