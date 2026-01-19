const todolist = [];

function addtodo() {
    const inputElement = document.querySelector("#todo-input");
    const name = inputElement.value;

    if (name === "") return; 

    todolist.push(name);

    const listElement = document.querySelector("#todo-list");
    const li = document.createElement("li");
    li.innerText = name;

    listElement.appendChild(li);

    inputElement.value = '';
}
