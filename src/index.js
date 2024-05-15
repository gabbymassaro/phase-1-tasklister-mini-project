const submitButton = document.querySelectorAll("form")[0];
const firstChild = submitButton[0];
const secondChild = submitButton[1];
console.log(secondChild)

document.addEventListener('DOMContentLoaded', () => {
  submitButton.addEventListener('submit', (e) => {
    e.preventDefault(secondChild);
    listTasks(e.target["new-task-description"].value)
  }) 
});

function listTasks(tasks) {
  let li = document.createElement('li')
  li.textContent = tasks
  document.querySelector('#tasks').appendChild(li); 
}
