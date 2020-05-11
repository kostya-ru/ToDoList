
"use strict";

window.addEventListener('DOMContentLoaded', function () {
    let inputToDo = document.getElementById('inputToDo'),
        add = document.getElementById('add'),
        toDoList = document.querySelector('.toDoList');

    let addToDoItem = function () {
        if (inputToDo.value === ''){
            inputToDo.placeholder = 'Нельзя сделать пустоту!';
        } else{
            let toDoItem = document.createElement('div'),
                itemName = document.createElement('div'),
                deleteItem = document.createElement('button');
            toDoItem.classList.add('toDoItem');
            toDoItem.classList.add('fade');
            itemName.classList.add('toDoName');
            deleteItem.classList.add('deleteToDo');
            deleteItem.textContent = 'Зачеркнуть!';

            toDoList.appendChild(toDoItem);
            toDoItem.appendChild(itemName);
            toDoItem.appendChild(deleteItem);
            itemName.textContent = inputToDo.value;
            inputToDo.value = '';
            inputToDo.placeholder = 'Какое дело надо сделать?';
            listenDeleteTodo(deleteItem);
        }
    }

    function listenDeleteTodo(element) {
        element.addEventListener("click", function (event) {
            element.parentElement.firstChild.style.cssText=`
            color: red;
            text-decoration: line-through;
            `;
            element.textContent = 'Удалить!';
            event.stopPropagation();
            element.addEventListener("click", function (event) {
                element.parentElement.classList.remove('fade');
                element.parentElement.classList.add('fadeAway');
                setTimeout(() => {
                    element.parentElement.remove();    
                }, 250);
                event.stopPropagation();
            });
        });
    }
    add.addEventListener('click', addToDoItem);

    inputToDo.addEventListener("keypress", (keyPressed) => {
        const keyEnter = 13;
        if (keyPressed.which === keyEnter) {
            addToDoItem();
        }
    });
});