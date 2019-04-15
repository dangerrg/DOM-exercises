// ***************************************************
// EXERCISE 24. DOM traversal
// ***************************************************
// Add up and down buttons to each comment

// Start by getting the container for all the comments,
let container = document.querySelector('ul.comments__listing');

// Loop through the list’s children, which are the individual comments.
for (var i = 0; i < 3; i++) {
  let list = document.getElementsByClassName('comments__listing')[0].getElementsByTagName('li')[i];
// for (var i = 0; i < container.children.length; i++) {
  // let list = container.children[i];

// Create the new <div> element
let newDiv = document.createElement('div');
// Add the class name 'prompt' to the new <div> element (newDiv)
newDiv.setAttribute('class', 'prompt'); // Or newDiv.className = 'prompt';

// Create the Up <button> element
let btnUp = '<button class="btn up">Up</button>';
newDiv.innerHTML = btnUp;

// Create the Down <button> element
let btnDown = document.createElement('button')
// Set the attributes and name to button (btnDown)
btnDown.setAttribute('class', 'btn down'); //Class name
btnDown.textContent = 'Down'; //Button name

// Instert the new element (Div) with contents into 'list'
list.appendChild(newDiv);
// Instert the new element (Button Down) as child of its parents
newDiv.appendChild(btnDown);

// console.log('Comment ' + [i] + ' with buttons', list);
}

// ==========================
// Part 2 Additionally
// ==========================
// Remove “Up” button from first child
// * Wrap the code for creating and adding the “Up” button in an if statement.
//   Make the  if statement check whether or not the current item is the
//   first child element.

// Check that the element has the correct class
let btnUp = document.querySelectorAll('.prompt button:nth-child(1)')[0];

// console.log(btnUp);
if (btnUp.className == 'btn up') {

  let anchor = btnUp.parentNode; //
// console.log(anchor);
  anchor.removeChild(btnUp);
}

// Remove “Down” button from last child
// * This is practically the same as for the “Up” button, but checking
//   if it is the last child element.
let btnDown = document.querySelectorAll('.prompt button:nth-last-child(1)')[2];
// Check that the element has the correct class
if (btnDown.className == 'btn down') {

  let anchor2 = btnDown.parentNode; //

  anchor2.removeChild(btnDown);
}
// Add margin between buttons
// * As a final challange, see if you can find a way to add a left margin
//   of 0.5em to the down button only when there also is an up button.
//   In other words, the button that is by itself in the first comment should
//   not have the added margin.


let btnDownLastChild = document.getElementsByClassName('btn down')[1];
function MarginLeftButtonDown() {
  if (btnDownLastChild) {
    // Add margin to the button
    btnDownLastChild.setAttribute('style', 'margin-left: 0.5em'); // Or btnDown.marginLeft = '0.5em';
  }
}
// console.log(btnDownLastChild);
MarginLeftButtonDown();

// ***************************************************
// EXERCISE 26. Moving elements
// ***************************************************
// Bind click events to the buttons
container.addEventListener( 'click' , function(event) {
  // Target the up button element.
  let target = event.target;
  // Check that the element has the correct class
  if (target.className.indexOf('up')!== -1) {
    // Store the comment as a variable li
    let li = target.parentNode; // Use `target` instead of querySelector
    let liItem = li.parentNode;
    // let container = liItem.parentNode;
    // Store the previous sibling element in a variable prevLi.
    let prevLi = liItem.previousElementSibling;
    // Check if previous sibling exists
    if (prevLi) {
      container.insertBefore(liItem, prevLi);
    }
  };
    // Target the down button
    // Check that the element has the correct class
  if (target.className.indexOf('down')!== -1) {
    // Store the comment as a variable li
    let li = target.parentNode.parentNode; // Use `target` instead of querySelector
    // Store the previous sibling element in a variable prevLi.
    let nextLi = li.nextElementSibling;
    if (nextLi) {
      // container.insertBefore(prevLi, li);
      container.insertBefore(nextLi, li);
    }
  }
});
