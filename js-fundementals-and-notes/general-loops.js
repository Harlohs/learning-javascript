// remove // before console.log to test each loop

// FOR LOOP | uses parameters separated by ; |
for(let i = 0; i < 10; i++){ //i++ is a number that goes up by 1 for each run of the loop
  if(i === 2){
    //console.log('2 is my favorite number');
    continue; // makes sure number 2 isnt repeated
  }

  if(i === 5){
    //console.log('stop the loop');
    break; // stops the loop
  }

  //console.log('number '+ i);
};
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

/*----------------------------------------------------------------------*/
//FOREACH loop | better way of looping through an array|

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

//FOR IN LOOP | to long a single set of data |
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
}
for(let x in user){
  //console.log(x);
  // console.log(`${x} : ${user[x]}`);
}