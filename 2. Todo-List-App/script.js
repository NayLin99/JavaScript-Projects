const divToDO = document.getElementById('todos');
const btnAdd = document.getElementById('add');

function get_todos() {
    var todos = [];
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

function add() {
    var task = document.getElementById('task').value;

    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById('task').value = '';
    show();

    return false;
}

function clearDefault(a) {
    if (a.defaultValue == a.value) {
        a.value = '';
    }
}

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}

function show() {
    var todos = get_todos();

    var html = '<ul>';
    for (let i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">Delete</button> </li>';
    }
    html += '</ul>';

    divToDO.innerHTML = html;

    var buttons = document.querySelectorAll('.remove');
    buttons.forEach(button => button.addEventListener('click', remove));
}

btnAdd.addEventListener('click', add);
show();