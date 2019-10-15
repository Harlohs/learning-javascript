const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// //click
// clearBtn.addEventListener('click', runEvent);

// //doubleclick
// clearBtn.addEventListener('dblclick', runEvent);

// //mousedown
// clearBtn.addEventListener('mousedown', runEvent); // when click starts

// //mouseup
// clearBtn.addEventListener('mouseup', runEvent); //when click ends

// //mouseenter
// card.addEventListener('mouseenter', runEvent); //only fires off when you go over the main element

// //mouseleave
// card.addEventListener('mouseleave', runEvent); //only fires off when you go over the main element

// //mouseover
// card.addEventListener('mouseover', runEvent); //does the same as above but also fires off when over an element within the element

// //mouseout
// card.addEventListener('mouseout', runEvent); //does the same as above but also fires off when over an element within the element

//mousemove
card.addEventListener('mousemove', runEvent);

// event handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY} `;

  document.body.style.backgroundColor = `rgb( ${e.offsetX}, ${e.offsetY}, 40)`;
}