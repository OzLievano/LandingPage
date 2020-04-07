// get the Modal
const modal = document.getElementById("myModal");

// get the button that opens the Modal
const btn = document.getElementById("myBtn");

//get  the <span> element that close the Modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
//when the user clicks on <span> (x), close the modal

//When the user clicks anywhere utside of the modal, close it
var modalBtns = [...document.querySelectorAll(".button")];
modalBtns.forEach(function(btn){
  btn.onclick = function() {
    var modal = btn.getAttribute('data-modal');
    document.getElementById(modal).style.display = "block";
  }
});

var closeBtns = [...document.querySelectorAll(".close")];
closeBtns.forEach(function(btn){
  btn.onclick = function() {
    var modal = btn.closest('.modal');
    modal.style.display = "none";
  }
});
