let re;
//literal characters
re = /hello/;
re = /hello/i;

// metacharacter symbols
re = /^h/i; // must start with
re = /d$/i; // must end with
re = /^hello world$/i; // must start and end with
re = /^h.llo world$/i; // .  matches any ONE character
re = /^h*llo world$/i; // * matches any character 0 or more times
re = /gre?a?y/i; // ? makes character optional
re = /gre?a?y\?/i; // \ lets character escape and be used in string


// string to match
const str = 'gray?';


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