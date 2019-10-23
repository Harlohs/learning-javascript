const user = {email: 'jdoe@gmail.com'};


try {
  //produce a ReferenceError
  //myFunction(); 

  //produce a typeError
  // null.myFunction();

  // will produce syntaxError
  // eval('hello world');

  // will produce a uri error
  // decodeURIComponent('%');

  if(!user.name) {
    //throw 'user has no name';

    // create own syntax error
    throw new SyntaxError('user has no name');
  }

} catch(err) {
  console.log(err);
  // console.log(err.message);
  // console.log(err.name);
  // console.log(err instanceof ReferenceError)
} finally {
  console.log('finally runs regardlesss of result')
}

console.log('program continues...');