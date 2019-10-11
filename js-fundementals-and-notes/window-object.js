// WINDOWS METHODS / OBJECTS / PROPERTIES

// Alert
// window.alert('hello world');
// alert('hello world');



// prompt
// const input = prompt();
// alert(input);



// confirm
// if(confirm('are you sure?')){
//   console.log('YES');
// } else {
//   console.log('NO');
// }

let val;

// properties

//Outer height and width
val = window.outerHeight;
val = window.outerWidth;

//Inner height and width | doesnt include top bar, scroll bar, or dev tool window. |
val = window.innerHeight;
val = window.innerWidth;

// scroll points
val = window.scrollY;
val = window.scrollX;

// location object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

//redirect
//window.location.href ="http://google.com";

//reload
//window.location.reload();

//history object
// window.history.go(-2); // goes back 2 pages
// val = window.history.length;

// navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);