// bubbling is when the event goes up to the parent element

// // EVENT BUBBLING
// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//   console.log('col');
// });
// // click on task list to experience event bubbling yourself (have open console)

//------------------------------------------------------------------------

//EVENT DELEGATION

// // this is an example of why you need event delegation | click the orange X and notice only the first one does the console log |
// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);
// function deleteItem(){
//   console.log('delete item');
// }

document.body.addEventListener('click', deleteItem);

function deleteItem(e){
  // this way needs to be very specific to the class name. That includes all of the class tags
  // if(e.target.parentElement.className === 'delete-item secondary-content'){
  //   console.log('delete item');
  // }

  // this method lets you select just one class name so its much more lenient on what it can do
  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }
}


