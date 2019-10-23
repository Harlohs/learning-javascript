let re;

re = /gray/; 

// shorthand character classes
re = /\w/; // word character - alphanumeric or _
re = /\w+/; // + = one or more
re = /\W/; // none word characters !##$^^&*^*&^&?
re = /\d/; //match any digit
re = /\d+/; //match any digit 0 or more times
re = /\D+/; // match any none digit
re = /\s/; // match whitespace chatacters such as space or tab
re = /\S/; // match none whitespace chatacters such as space or tab
re= /Hell\b/i; // word boundary

//Assertions
re = /x(?=y)/; // matches x only if follwed by y
re = /x(?!y)/; // matches x only if NOT follwed by y

// string to match
const str = 'wexery';


// log results
const result = re.exec(str);
console.log(result);

function reTest() {
  if(re.test(str)) {
    console.log(`${str} match ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);