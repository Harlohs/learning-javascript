let val;

val = document;
val = document.all; // gets a collection of all the html tags within the document
val = document.all[1];// pulls a specific tag from all of the tags
val = document.all.length;
val = document.head; // gets only the head tag
val = document.body; //gets only the body tag
val = document.doctype; // shows doctype
val = document.domain;
val = document.URL;
val = document.characterSet;


val = document.forms; // pulls all forms on the page
val = document.forms[0];// pulls first form
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links; //gets link from page
val = document.links[0];// gets first link
val = document.links[0].id; //gets the id tag from the document
val = document.links[0].className; //gets the class tag from the document
val = document.links[0].classList; //gets a list of class tags 
val = document.links[0].classList[0];

val = document.images; //gets images

val = document.scripts; // gets scripts
val = document.scripts[2].getAttribute('src');//gets attribute of script

// uses a forEach statement to pull each script
let scripts = document.scripts;

let scriptArr = Array.from(scripts);

scriptArr.forEach(function(script){
  console.log(script);
});

//displays a certain script attribute within forEach loop
scriptArr.forEach(function(script){
  console.log(script.getAttribute('src'));
});

console.log(val);
