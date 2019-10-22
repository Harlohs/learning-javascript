// tied to index4

const posts = [
  {title: 'post one', body: 'this is post one'},
  {title: 'post two', body: 'this is post two'}  
];
 
// function createPost(post) {
//   setTimeout(function() {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(function() {
//     let output = '';
//     posts.forEach(function(post) {
//       output += `<li>${post.title}</li>`
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({title: 'post three', body: 'this is post three'});

// getPosts();

// THIS HOW HOW YOU USE CALL BACK ===============================================================
// function createPost(post, callback) { // callback | passed in like a function |
//   setTimeout(function() {
//     posts.push(post);
//     callback(); // callback | passed in like a function |
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(function() {
//     let output = '';
//     posts.forEach(function(post) {
//       output += `<li>${post.title}</li>`
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({title: 'post three', body: 'this is post three'}, getPosts);

// callbacks are a function passed into another function and then called within that fucntion



//ES6 PROMISES ==============================================================================
function createPost(post) { 
  return new Promise(function(resolve,reject){
    setTimeout(function() {
      posts.push(post);
      
      const error = false;

      if(!error) {
        resolve();
      } else {
        reject('Error: something went wrong');
      } 
    }, 2000);
  });
}
  function getPosts() {
    setTimeout(function() {
      let output = '';
      posts.forEach(function(post) {
        output += `<li>${post.title}</li>`
      });
      document.body.innerHTML = output;
    }, 1000);
  }
  
  createPost({title: 'post three', body: 'this is post three'})
  .then(getPosts)
  .catch(function(err){
    console.log(err);
  });
