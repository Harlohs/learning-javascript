// WINDOWS METHODS / OBJECTS / PROPERTIES

// Alert | creates a popup |
// window.alert('hello world');
// alert('hello world');



// prompt | creates a popup that takes input |
// const input = prompt();
// alert(input);



// confirm | adds a confirm message popup |
// if(confirm('are you sure?')){
//   console.log('YES');
// } else {
//   console.log('NO');
// }

let val;

// properties

//Outer height and width | includes top bar, scroll bar, and dev tools |
val = window.outerHeight;
val = window.outerWidth;

//Inner height and width | doesnt include top bar, scroll bar, or dev tool window |
val = window.innerHeight;
val = window.innerWidth;

// scroll points | to know how far youve scrolled down a page |
val = window.scrollY;
val = window.scrollX;

// location object | find out information about the host |
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

//redirect to another page
//window.location.href ="http://google.com";

//reloads the page 
//window.location.reload();

//history object to go back 2 pages
// window.history.go(-2); // goes back 2 pages
// val = window.history.length;

// navigator Object | get info on browser |
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);