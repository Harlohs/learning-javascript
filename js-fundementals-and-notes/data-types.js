// primitive data types and reference data types

/*==========================================
PRIMITIVE data types
==========================================*/
//string
  const name = 'john';
  console.log(typeof name);
  
//number
  const age = 45;
  console.log(typeof age);

//boolean | TRUE FALSE STATEMEMNTS |
  const hasKids = true;
  console.log(typeof hasKids);

//null | can appear as OBJECT in console|
  const car = null;
  console.log(typeof car);

//undefined
  let test;
  console.log(typeof test);

//symbols(ES6)
  const sym = Symbol('');
  console.log(typeof sym);


  
/*==========================================
REFERENCE TYPES - objects | accessed from memory for reference |
==========================================*/
// arrays
  const hobbies = ['movies', 'music', 'painting'];
  console.log(typeof hobbies);
  
// object literals
  const address = {
    city: 'Salt Lake City',
    state: 'UT'
  }
  console.log(typeof address);

  // dates
  const today = new Date();
  console.log(today);
  console.log(typeof today);
