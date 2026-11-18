const button = document.querySelector(".menu-button");
const list = document.querySelector("#primary-nav");

// TODO 1: mark the document as enhanced, reveal the button, and initialize state.
document.documentElement.classList.add("js");
button.hidden = false;
setOpen(false);

// TODO 2: create one function that synchronizes aria-expanded and visible state.
function setOpen(isOpen) {
  button.setAttribute("aria-expanded", isOpen);
  list.classList.toggle("is-open", isOpen);
}

// TODO 3: toggle that function when the native button is activated.
button.addEventListener("click", function () {
  setOpen(button.getAttribute("aria-expanded") !== "true");
});

// TODO 4: when Escape is pressed while open, close and return focus to the button.
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
    setOpen(false);
    button.focus();
  }
});
