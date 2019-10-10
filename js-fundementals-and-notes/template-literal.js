const name = "john";
const age = 31;
const job = "web developer";
const city = "miami";
let html;

// without template strings (es5)
html = '<ul><li>Name: '+ name +'</li><li>Age: '+ age +'</li><li>Job: '+ job +'</li><li>City: '+ city +'</li></ul>';

// kind of outdated way of doing lists
html = '<ul>' +
       '<li>Name: '+ name +'</li>' +
       '<li>Age: '+ age +'</li>' +
       '<li>Job: '+ job +'</li>' +
       '<li>City: '+ city +'</li>' +
       '</ul>';

function hello(){
  return 'hello';
}

// with template literals (es6)
html = `
  <ul>
    <li>Name: ${name} </li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>expresions: ${2 + 2}</li> 
    <li>function: ${hello()}</li>
    <li>conditional: ${age > 30 ? 'over 30' : 'under 30' }</li>
  <ul>
`

document.body.innerHTML = html;