const submitButton = document.querySelectorAll("form")[0]
const secondChild = submitButton[1]

document.addEventListener('DOMContentLoaded', () => {
  submitButton.addEventListener('submit', (e) => {
    e.preventDefault(secondChild)
    listTasks(e.target["new-task-description"].value)
  }) 
});

function listTasks(tasks) {
  let li = document.createElement('li')
  li.textContent = tasks
  document.querySelector('#tasks').appendChild(li)
}