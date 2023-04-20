console.log("JavaScript Portion of the Test");

// Step 1: Write a multi-line comment detailing your name and student number

/*
    Davyn Oxby
    200489002
*/

const myImmutableArray = ["Jared", "Francis", "Amrit", "Sarah", "Gurleen", "Johanna", "Ury"];

// Step 2: Add the 3 people's names to the array

myImmutableArray.push("Davyn");
myImmutableArray.push("Marco");
myImmutableArray.push("Ron");

// Step 4: Remove the first array item from the array

myImmutableArray.shift();

// Step 5 Remove the second array item from the array

myImmutableArray.splice(1, 1);

// Step 6: Using array filter, iterate over the array items and remove all items beginning with the letter "J". Store the result in a new, block scoped, mutable variable

const items = ["James", "John", "Joe", "Sarah", "Jane"];

const filteredItems = items.filter(item => !item.startsWith("J"));

console.log(filteredItems);


// Step 7: Create an event listener that fires a callback function when the call to action button in the header is clicked. It should alert "Call me now at 555-555-55555";

/*
const callNowButton = document.getElementById('call-now');
callNowButton.addEventListener('click', function() {
  alert('Call me now at 555-555-5555');
});
*/

// Bonus Challenge Modal:

var modal = document.getElementById("call-modal");
var btn = document.getElementById("call-now");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
  setTimeout(function() {
    modal.style.opacity = "1";
  }, 10);
}

span.onclick = function() {
  modal.style.opacity = "0";
  setTimeout(function() {
    modal.style.display = "none";
  }, 300);
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.opacity = "0";
    setTimeout(function() {
      modal.style.display = "none";
    }, 300);
  }
}



