'use strict';
class Task {
  constructor(task, owner, isDone) {
    this.task = task;
    this.owner = owner;
    this.isDone = isDone;
  }
}

let taskInput = document.getElementById('input-task');
let btnAdd = document.getElementById('btn-add');
let closeEl = document.getElementsByClassName('close');
let todoList = document.getElementById('todo-list');

let loginArr = [];
getLoginFromStorage();
console.log(loginArr);

let todoArr = [];
getTodoFromStorage();

//Bắt sự kiện cho nút Add task
btnAdd.addEventListener('click', function () {
  let todo = {
    task: taskInput.value,
    owner: loginArr[0].userName,
    isDone: false,
  };

  if (taskInput.value === '') {
    alert('Please input task!');
    return false;
  }

  let taskArr = new Task(`${todo.task}`, `${todo.owner}`, `${todo.isDone}`);
  todoArr.push(taskArr);
  saveTodoToStorage();
  taskInput.value = '';
  loadTasks();
});

window.onload = loadTasks;

//Hiển thị task tương ứng với username
function loadTasks() {
  let content = '';
  for (let i = 0; i < todoArr.length; i++) {
    if (loginArr[0].userName === todoArr[i].owner) {
      let todoArr2 = [];
      todoArr2.push(todoArr[i]);
      todoArr2.forEach((task) => {
        content += `<li>
        ${task.task}
        <span class="close" onclick="closeTask('${todoArr[i].task}');">×</span>
    </li>`;
      });
      console.log(todoArr);
      todoList.innerHTML = content;
    }
  }
}

//Hàm xóa 1 task
function closeTask(task) {
  if (confirm('Are you sure?')) {
    for (let i = 0; i < todoArr.length; i++) {
      if (task === todoArr[i].task) {
        todoArr.splice(i, 1);
        i--;
      }
    }
  }
  saveTodoToStorage();
  loadTasks();
}

//Đánh dấu task là được hoàn thành
todoList.addEventListener(
  'click',
  function (ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
      for (let i = 0; i < todoArr.length; i++) {
        if (ev === todoArr[i].task) {
          todoArr[i].isDone = 'true';
        }
        saveTodoToStorage();
      }
    }
  },
  false
);
