
// When the user scrolls the page, execute myFunction
window.onscroll = function() {stick()};

// Get the navbar
var navbar = document.getElementById("navbar");


// Get the offset position of the navbar

var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stick() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("stickynav")
    navbar.style.height="30px";
    navbar.style.fontSize="25px";


  } else {
    navbar.classList.remove("stickynav");
    navbar.style.height="50px";
    navbar.style.fontSize="45px";
  }
}