let re;
re = /hello/;
re = /hello/i; // i = case insensitive
// re = /hello/g; // global search

// console.log(re);
// console.log(re.source);

// exec() - return result in an array or null
// const result = re.exec('hello world'); // re tracks the world hello and its index
// console.log(result)
// console.log(result[0]);
// console.log(result.index);

// const results = re.exec('hi world'); // returns null
// console.log(results)

// test() - returns true or false
// const result = re.test('hello'); // comes back true
// const result = re.test('Hello'); // comes back false | because its caps |
// console.log(result);

//match() - return result array or null
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);

//search() - returns index of the first match if not found it returns -1
// const str = 'hello there';
// const result = str.search(re);
// console.log(result);

//replace() - return a new string with some or all matches of a pattern
const str = 'hello there';
const result = str.replace(re, 'hi');
console.log(result);