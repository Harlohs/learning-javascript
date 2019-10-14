const name = "john";
const age = 31;
const job = "web developer";
const city = "miami";
let html;

// without template strings (es5) | this is a basic html string | and is probably the worst way to make a list
html = '<ul><li>Name: '+ name +'</li><li>Age: '+ age +'</li><li>Job: '+ job +'</li><li>City: '+ city +'</li></ul>';

// kind of outdated way of doing lists | more in dated but there is still easier way|
html = '<ul>' +
       '<li>Name: '+ name +'</li>' +
       '<li>Age: '+ age +'</li>' +
       '<li>Job: '+ job +'</li>' +
       '<li>City: '+ city +'</li>' +
       '</ul>';

function hello(){
  return 'hello';
}

// with template literals (es6) | `` back ticks are your savior |
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