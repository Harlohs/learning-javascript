// tied with index 8

const http = new EasyHTTP;

// GET USERS
// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// USER DATA
const data = {
  name: 'john doe',
  username: 'spandex',
  email: 'jdoe@gmail.com'
}

// CREATE USER | post tag |
// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// UPDATE USER
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// DELETE USER
http.delete('https://jsonplaceholder.typicode.com/users/2')
  .then(data => console.log(data))
  .catch(err => console.log(err));
