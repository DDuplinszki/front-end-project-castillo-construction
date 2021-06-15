//Get the button
let scrollTop = document.getElementById("go-up");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    scrollTop.style.opacity = 1;
  } else {
    scrollTop.style.opacity = 0;
  }
}
// When the user clicks on the button, scroll to the top of the document
scrollTop.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}