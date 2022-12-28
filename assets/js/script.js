
let popUp = document.getElementById("pop-up");
let btnAbout = document.getElementById("about-btn");
let closeBox = document.getElementById("close-box");

window.onload;
// clicking on About button will display pop-up window
btnAbout.onclick = function() {
 popUp.style.display = "block";
};
// clicking on x will close the pop-up window
closeBox.onclick = function() {
  popUp.style.display = "none";
};

// clicking anywhere outside of the pop-up window will close it
window.onclick = function(event) {
  if (event.target == popUp) {
    popUp.style.display = "none";
  };
};
