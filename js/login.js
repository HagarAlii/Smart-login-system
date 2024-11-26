window.addEventListener("load", function () {
  const enteredName = document.querySelector(".enteredName");
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser) {
    enteredName.innerHTML = loggedInUser; 
  } else {
    enteredName.innerHTML = "Guest"; 
  }
});

var first = document.querySelector(".first");
var sec = document.querySelector(".sec");



var v2 =setTimeout( function() {
  first.classList.add("opacity-0")
  sec.classList.add("opacity-100")
  sec.style.cssText=`
  animation-name: run;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
  `
} ,9000)
