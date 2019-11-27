// var myNodeList = document.getElementsByTagName("li");
// var i;
// for(i =0; i < myNodeList.length; i++) {
//     var span = document.createElement("span");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     myNodeList[i].appendChild(span);
// }

// var close = document.getElementsByClassName("close");
// var i;
// for(i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//         var div = this.parentElement;
//         div.style.display = "none";
//     }
// }

// var list = document.querySelector("ul");
// list.addEventListener("click", function(e) {
//     if(e.target.tagName === "li") {
//         e.target.classList.toggle("checked");
//     }
// }, false)

// function addToList() {
//     var li = document.createElement("li");
//     var inputValue = document.getElementById("itemInput").nodeValue;
//     var t = document.createTextNode(inputValue);
//     li.appendChild(t);
//     debugger
//     if(inputValue === "") {
//         alert("Enter something");
//     } else {
//         document.getElementById("listBody").appendChild(li);
//         document.getElementById("itemInput").value = "";

//         var span = document.createElement("span");
//         var txt = document.createTextNode("\u00D7");
//         span.className = "close";
//         span.append(txt);
//         li.appendChild(span);

//         for (i = 0; i < close.length; i++) {
//             close[i].onclick = function () {
//                 var div = this.parentElement;
//                 div.style.display = "none";
//             }
//         }
//     }
// }
let todoItems = [];

function addTodo(text){
    const todo = {
        text,
        checked: false,
        id: Date.now()
    };

    todoItems.push(todo);

    const list = document.querySelector('.js-todo-list');
    list.insertAdjacentHTML('beforeend', `
        <li class="todo-item" data-key="${todo.id}">
            <input id="${todo.id}" type="checkbox" />
            <label for="${todo.id}" class="tick js-tick"></label>
            <span>${todo.text}</span>
            <button class="delete-todo js-delete-todo">
                <svg><use href="#delete-icon"></use></svg>
            </button>
        </li>
    `);
}

function toggleDone(key) {
    const index = todoItems.findIndex(item => item.id === Number(key));
    todoItems[index].checked = !todoItems[index].checked;

    const item = document.querySelector(`[data-key='${key}']`);
    if (todoItems[index].checked) {
        item.classList.add('done');
    } else {
        item.classList.remove('done');
    }
}

function deleteTodo(key) {
    todoItems = todoItems.filter(item => item.id !== Number(key));
    const item = document.querySelector(`[data-key='${key}']`);
    item.remove();
}

const form = document.querySelector('.js-form');
form.addEventListener('submit', event => {
    event.preventDefault();
    const input = document.querySelector('.js-todo-input');

    const text = input.value.trim();
    if (text !== '') {
        addTodo(text);
        input.value = '';
        input.focus();
    }
});

const list = document.querySelector('.js-todo-list');
list.addEventListener('click', event => {
    if (event.target.classList.contains('js-tick')) {
        const itemKey = event.target.parentElement.dataset.key;
        toggleDone(itemKey);
    }

    if(event.target.classList.contains('js-delete-todo')) {
        const itemKey = event.target.parentElement.dataset.key;
        deleteTodo(itemKey);
    }
});