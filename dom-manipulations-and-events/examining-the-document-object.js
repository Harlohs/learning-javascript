let val;

val = document; // gets the entire html document
val = document.all; // gets a collection of all the html tags within the document
val = document.all[1];// pulls a specific tag from all of the tags
val = document.all.length;
val = document.head; // gets only the head tag
val = document.body; //gets only the body tag
val = document.doctype; // shows doctype
val = document.domain; // gives address
val = document.URL; 
val = document.characterSet;


val = document.forms; // pulls all forms on the page
val = document.forms[0];// pulls first form
val = document.forms[0].id; //gets form name
val = document.forms[0].method; // gets form type
val = document.forms[0].action; //gives action from form

val = document.links; //gets link from page
val = document.links[0];// gets first link
val = document.links[0].id; //gets the id tag from the document
val = document.links[0].className; //gets the class tag from the document
val = document.links[0].classList; //gets a list of class tags 
val = document.links[0].classList[0]; // gets collection first class tag

val = document.images; //gets images

val = document.scripts; // gets all scripts
val = document.scripts[2].getAttribute('src'); //gets attribute of script

// uses a forEach statement to pull each script
let scripts = document.scripts;

let scriptArr = Array.from(scripts); // this converts to array | let NEW TAG = Array.from(OLD TAG); |

scriptArr.forEach(function(script){
  console.log(script);
});

//displays a certain script attribute within forEach loop
scriptArr.forEach(function(script){
  console.log(script.getAttribute('src'));
});

console.log(val);
