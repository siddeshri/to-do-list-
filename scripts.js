// script.js
const newTodoInput = document.getElementById("newTodo");
const addTodoButton = document.getElementById("addTodo");
const todoList = document.getElementById("todoList");

addTodoButton.addEventListener("click", () => {
  const todoText = newTodoInput.value.trim();
  if (todoText !== "") {
    const todoItem = document.createElement("li");
    todoItem.innerHTML = `
      ${todoText}
      <button class="deleteTodo">Delete</button>
    `;
    todoList.appendChild(todoItem);
    newTodoInput.value = "";
    attachDeleteListener(todoItem);
  }
});

function attachDeleteListener(todoItem) {
  const deleteButton = todoItem.querySelector(".deleteTodo");
  deleteButton.addEventListener("click", () => {
    todoItem.remove();
  });
}
// Add this code after the existing JavaScript code

const completedCheckboxList = document.querySelectorAll(".completedCheckbox");

completedCheckboxList.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const todoText = checkbox.nextElementSibling; // Get the span element containing the todo text
    if (checkbox.checked) {
      todoText.style.textDecoration = "line-through";
    } else {
      todoText.style.textDecoration = "none";
    }
  });
});

newTodoInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTodoButton.click();
  }
});
