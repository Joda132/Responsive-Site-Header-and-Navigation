const button = document.querySelector(".menu-button");
const list = document.querySelector("#primary-nav");


// Step 1: Added the js class and show the button and start closed so that all of the links stay visible without javascript
document.documentElement.classList.add("js");
button.hidden = false;
setOpen(false);


// Step 2: updated the aria expanded and is open together so that the screen readers match what is currently on screen
function setOpen(isOpen) {
  button.setAttribute("aria-expanded", isOpen);
  list.classList.toggle("is-open", isOpen);
}


// Step 3: flipped the menu to be open or closed on a click so that the real button handles enter and space
button.addEventListener("click", function () {
  setOpen(button.getAttribute("aria-expanded") !== "true");
});


// Step 4: using escape will close the open menu and moves the focus back to the button.
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
    setOpen(false);
    button.focus();
  }
});
