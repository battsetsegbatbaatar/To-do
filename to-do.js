const addBtnRef = document.querySelectorAll(".addBtn");
console.log(addBtnRef);
// + add button der darahad tsonh vvsch task hiih heseg
const active = document.querySelectorAll(".active");
addBtnRef.forEach((element) => {
  element.onclick = function (event) {
    active.forEach((element) => {
      element.style.display = "flex";
    });
  };
});

// taskaa hiih hooson array
const state = {
  tasks: [],
};
const useId = () => {
  const id = "id" + Math.random().toString(16).slice(2);
  return id;
};
const cleanTasks = () => {
  const taskColumns = document.querySelectorAll(".column");
  taskColumns.forEach((taskColumn) => {
    taskColumn.innerHTML = "";
  });
};

const countEachTaskOfStatus = () => {
  const statuses = ["todo", "inprogress", "stuck", "done"];

  statuses.forEach((status) => {
    const taskColumnCounter = document.getElementById(
      status + "-column-task-counter"
    );

    taskColumnCounter.innerHTML = state.tasks.reduce((acc, cur) => {
      if (cur.status == status) return acc + 1;
      return acc + 0;
    }, 0);
  });
};
const addTaskBtn = document.getElementById("btn");
addTaskBtn.addEventListener("click", () => {
  const active = document.querySelector(".active");
  const warning = document.getElementById("warning");
  if (titleInputRef.value === "" || desInputRef.value === "") {
    warning.style.display = "flex";
  } else {
    if (active) {
      active.style.display = "none";
      addTask();
    }
  }
});
// shine tsonhon deer utgaa awhiin tuld id duudsan
const titleInputRef = document.getElementById("title");
const desInputRef = document.getElementById("description");
const prioInputRef = document.getElementById("priority");
const staIputRef = document.getElementById("status");
// render unshjiin
function render() {
  const todo = document.getElementById("todo");
  const inProgress = document.getElementById("inProgress");
  const stuck = document.getElementById("stuck");
  const done = document.getElementById("done");
  done.innerHTML = "";
  stuck.innerHTML = "";
  inProgress.innerHTML = "";
  todo.innerHTML = "";
  //  vvsgesen arrayruu utga hiisn
  state.tasks.forEach((task) => {
    //  shine elment vvsgesen
    const card = document.createElement("div");
    const done = document.createElement("div");
    const defailt = document.createElement("div");
    const edit = document.createElement("div");
    const titRef = document.createElement("h4");
    const desRef = document.createElement("p");
    const statusRef = document.createElement("div");
    const prioRef = document.createElement("div");
    // shine vvsgesen elementendee tsonhon deer bichsen utgaa oruulsn
    titRef.textContent = task.Title;
    desRef.textContent = task.description;
    statusRef.textContent = task.state;
    prioRef.textContent = task.priority;

    card.classList.add("task-card");
    card.id = task.id + "-task-card";
    card.draggable = "true";

    // icon nuudaa duudsan
    const doneIcon = document.createElement("i");
    doneIcon.classList.add("fa-regular", "fa-circle-check");
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-xmark");
    deleteIcon.id = task.id;
    const editIcon = document.createElement("i");
    editIcon.classList.add("fa-regular", "fa-pen-to-square");
    // duudsan zvilsee appenad child hiisen
    done.appendChild(doneIcon);
    done.classList.add("done");
    defailt.appendChild(titRef);
    defailt.appendChild(desRef);
    defailt.appendChild(prioRef);
    prioRef.classList.add("priority");
    defailt.classList.add("defailt");
    edit.appendChild(deleteIcon);
    edit.appendChild(editIcon);
    edit.classList.add("edit");
    card.appendChild(done);
    card.appendChild(defailt);
    card.appendChild(edit);
    card.classList.add("card");

    editIcon.onclick = function () {
      if (active[0]) {
        titleInputRef.value = titRef.textContent;
        desInputRef.value = desRef.textContent;
        staIputRef.value = statusRef.textContent;
        prioInputRef.value = prioRef.textContent;
        active[0].style.display = "flex";
        task.Title = "";
        task.description = "";
        task.state = "";
        task.priority = "";
      }
    };
    // 4 baganaruu oruulah heseg
    if (task.state === "todo") {
      task.priority = task.priority.toLowerCase();
      todo.appendChild(card);
    }
    if (task.state === "inprogress") {
      task.priority = task.priority.toLowerCase();
      inProgress.appendChild(card);
    }
    if (task.state === "stuck") {
      task.priority = task.priority.toLowerCase();
      stuck.appendChild(card);
    }
    if (task.state === "done") {
      task.priority = task.priority.toLowerCase();
      done.appendChild(card);
    }
    deleteIcon.onclick = function (event) {
      const taskId = event.target.id;
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
      render();
    };
    doneIcon.onclick = function () {
      doneIcon.classList.add("fa-solid", "fa-circle-check");
      task.state = "done";
      if (task.state === "done") {
        const done = document.getElementById("done");
        done.appendChild(card);
      }
    };
  });
  countEachTaskOfStatus();
}

const addTask = () => {
  const id = "id" + Math.random().toString(16).slice(2);
  state.tasks.push({
    Title: titleInputRef.value.trim(),
    description: desInputRef.value.trim(),
    state: staIputRef.value,
    priority: prioInputRef.value,
    id: id,
  });
  console.log(state.tasks);
  render();
  titleInputRef.value = "";
  desInputRef.value = "";
  staIputRef.value = "";
  prioInputRef.value = "";
};

const taskCards = document.querySelectorAll('.task-card');
  taskCards.forEach((taskCard) => {
    taskCard.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('text', event.target.id);
    });
  });

  const taskColumns = document.querySelectorAll('.column');
  taskColumns.forEach((taskColumn) => {
    taskColumn.addEventListener('drop', (event) => {
      const draggedTaskId = event.dataTransfer.getData('text');

      state.tasks = state.tasks.map((task) => {
        if (task.id + '-task-card' == draggedTaskId) task.status = event.target.getAttribute('data-id');
        return task;
      });

      render();
    });

    taskColumn.addEventListener('dragover', function allowDrop(ev) {
      ev.preventDefault();
    });
  });

  countEachTaskOfStatus();
}