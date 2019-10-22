// goes with index6
document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// GET LOCAL TEXT FILE DATA ========================================
function getText(){
  fetch('test.txt')
  .then(res => res.text())
  .then(data => {
    console.log(data);
    document.getElementById('output').innerHTML = data;
  })
  .catch(err => console.log(err));
}

// GET LOCAL JSON FILE DATA =======================================
function getJson(){
  fetch('post.json')
  .then(res => res.json())
    .then(data => {
      console.log(data);
    let output = '';
    data.forEach(function(post) {
      output += `
          <ul>  
            <li>title: ${post.title}</li>
            <li>body: ${post.body}</li>
          </ul>
          `;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(function(err){
    console.log(err);
  });
}

// GET API DATA FROM EXTERNAL ====================================
function getExternal(){
  fetch('https://api.github.com/users')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    let output = '';
    data.forEach(function(user) {
      output += `
          <ul>  
            <li>${user.login}</li>
          </ul>
          `;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(err => console.log(err));
 };
