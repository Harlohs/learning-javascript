// remove // before console.log to test each loop

// FOR LOOP

for(let i = 0; i < 10; i++){
  if(i === 2){
    //console.log('2 is my favorite number');
    continue;
  }

  if(i === 5){
    //console.log('stop the loop');
    break;
  }

  //console.log('number '+ i);
  
}
/*-----------------------------------------------------------------------*/

// WHILE LOOP


let i = 0;

while(i < 10){
  //console.log('Number ' + i);
  ++i;
}
/*----------------------------------------------------------------------*/

// DO WHILE LOOP | always runs no matter what |
 
let i2 = 100;

do {
  // console.log('number ' + i);
  i2++;
}

while(i < 10);
/*----------------------------------------------------------------------*/


// LOOP THROUGH ARRAY
const cars = ['ford', 'jeep', 'honda', 'chevy'];

 for (let i = 0; i < cars.length; i++){
  // console.log(cars[i]);
}

//FOREACH loop
cars.forEach(function(car, index, array){
  // console.log(`${index} : ${car}`);
  // console.log(array);
});
/*----------------------------------------------------------------------*/

// MAP
const users = [
  {id:1, name: 'john'},
  {id:2, name: 'sara'},
  {id:3, name: 'jeff'},
  {id:4, name: 'karen'},
];
 const ids = users.map(function(user){
   return user.id;
 });

//  console.log(ids);

//FOR IN LOOP
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
}
for(let x in user){
  //console.log(x);
  // console.log(`${x} : ${user[x]}`);
}