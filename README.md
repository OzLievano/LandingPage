Project title
This project is about creating a landing page for a social media site for gamers to share their highlights or funny moments in the games they love.

Motivation
The motivation behind this project is that me personally, as a gamer, find a challenge in sharing all my great gaming moments in a quick and easy fashion.

Build status
No integration at this time.

Build Status Windows Build Status
N/A

Code style
standard code style (HTML, CSS, JS)

js-standard-style

Screenshots
/var/folders/2f/20l32g2j66g5g9yv6vfbm9vh0000gp/T/TemporaryItems/(A Document Being Saved By screencaptureui 3)/Screen Shot 2020-04-06 at 2.26.43 PM.png

Tech/framework used
Ex. - N/A

Built with:
ATOM

Electron
Features
What makes your project stand out?

Code Example (JS)
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

Installation
Download the zipfile into your local computer.

API Reference
web application API

Tests
Using eventListeners when a user clicks on the buttons to open up the modals.
How to use?
Use my project to upload your favorite highlights videos from your games.

Contribute
N/A.

Credits
Stack Overflow and W3Schools for help in building out many of the forms and modals. Engineering Friend at work helped me uncover some bugs with script placements.

Anything else that seems useful
Had a lot of fun!

@Ozzy Lievano
