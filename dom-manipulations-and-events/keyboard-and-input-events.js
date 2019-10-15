const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

//clears input
taskInput.value = '';

// // SUBMIT

//form.addEventListener('submit', runEvent);

// function runEvent(e){
//   console.log(`EVENT TYPE: ${e.type}`);

//   // get input value
//   console.log(taskInput.value);
  
//   e.preventDefault();
//  }

//--------------------------------------------------------------

// KEYDOWN

taskInput.addEventListener('keydown', runEvent);

function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  //catches what was typed
 //  console.log(e.target.value);

  // //displays what youre writting somewhere else on page
  // heading.innerText = e.target.value;
 }

//--------------------------------------------------------------

// KEYUP

taskInput.addEventListener('keyup', runEvent);

function runEvent(e){
 // console.log(`EVENT TYPE: ${e.type}`);

}

//--------------------------------------------------------------

//KEY PRESS

taskInput.addEventListener('keypress', runEvent);

function runEvent(e){
 // console.log(`EVENT TYPE: ${e.type}`);

}

//--------------------------------------------------------------

// FOCUS

taskInput.addEventListener('focus', runEvent);

function runEvent(e){
 // console.log(`EVENT TYPE: ${e.type}`);

}

//--------------------------------------------------------------

// BLUR

taskInput.addEventListener('blur', runEvent);

function runEvent(e){
 // console.log(`EVENT TYPE: ${e.type}`);

}

//--------------------------------------------------------------

// CUT

taskInput.addEventListener('cut', runEvent);

function runEvent(e){
 // console.log(`EVENT TYPE: ${e.type}`);

}

//--------------------------------------------------------------

// COPY

taskInput.addEventListener('copy', runEvent);

function runEvent(e){
  // console.log(`EVENT TYPE: ${e.type}`);

}

//--------------------------------------------------------------

// PASTE

taskInput.addEventListener('paste', runEvent);

function runEvent(e){
  // console.log(`EVENT TYPE: ${e.type}`);

}

//--------------------------------------------------------------

// INPUT

taskInput.addEventListener('input', runEvent);

function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

}

//--------------------------------------------------------------

// CHANGE

taskInput.addEventListener('change', runEvent);

function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

}
// this type requires a drop down menu which isnt on the sheet