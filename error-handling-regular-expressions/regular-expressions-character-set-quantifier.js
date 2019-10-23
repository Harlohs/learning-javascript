let re;
//literal characters

//brackets [] - Character sets
re =  /gr[aei ]y/i; // must be a character within the brackets [] 
re =  /[GFfg]ray/; // the characters within the brackets are case sensitive unless you include i
re =  /[^GF]ray/i; // matches anything but what is in brackets
re =  /[A-Z]ray/; // matches any uppercase letter 
re =  /[a-z]ray/; // matches any lowercase letter 
re =  /[A-Za-z]ray/; // matches any letter 
re = /[0-9]ray/; // matches any diget

// Braces {} - quantifiers
re = /Hel{2}o/i; // must occur exactly {x} amount of times
re = /Hel{2,4}o/i; //  must occur between {x,y} amount of times
re = /Hel{2,}o/i; //  must occur atleast {x} times

// parenthesis () - grouping
re = /^([0-9]x){3}$/;

// string to match
const str = '3x3x3x';


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