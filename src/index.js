// document.addEventListener("DOMContentLoaded", () => {

// });

document.addEventListener('click', (e) => {
  const submitButton = document.querySelectorAll("form")[0];
  const secondChild = submitButton[1];
  e.preventDefault(secondChild); 
});