const addBtnRef = document.getElementById("addBtn");

// + add button der darahad tsonh vvsch task hiih heseg
const active = document.querySelectorAll(".active");
addBtnRef.addEventListener("click", (event) => {
  active.forEach((element) => {
    element.style.display = "flex";
  });
});
// taskaa hiih hooson array
const state = {
  tasks: [],
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

function render() {
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
    console.log(card);
    deleteIcon.onclick = function (event) {
      const taskId = event.target.id;
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    };
    doneIcon.onclick = function () {
      doneIcon.classList.add("fa-solid", "fa-circle-check");
      task.state = "done";
      if (task.state === "done") {
        const done = document.getElementById("done");
        done.innerHTML = "";
        done.appendChild(card);
      }
    };
    editIcon.onclick = function () {
      if (active[0]) {
        active[0].style.display = "flex";
        titRef.value = titRef.value;
        desRef.value = desInputRef.value;
        statusRef.value = staIputRef.value;
        prioRef.value = prioInputRef.value;
      }
    };

    if ((task.completed = !task.completed)) {
      // 4 baganaruu oruulah heseg
      if (task.state === "todo") {
        const todo = document.getElementById("todo");
        todo.appendChild(card);
        const countTodo = document.getElementById("countTodo");
        countTodo = state.tasks.length;
      }
      if (task.state === "inprogress") {
        const inProgress = document.getElementById("inProgress");
        inProgress.innerHTML = "";
        inProgress.appendChild(card);
      }
      if (task.state === "stuck") {
        const stuck = document.getElementById("stuck");
        stuck.innerHTML = "";
        stuck.appendChild(card);
      }
      if (task.state === "done") {
        const done = document.getElementById("done");
        done.innerHTML = "";
        done.appendChild(card);
      }
    }
  });
}

const addTask = () => {
  const id = "id" + Math.random().toString(16).slice(2);
  console.log(id);

  state.tasks.push({
    Title: titleInputRef.value.trim(),
    description: desInputRef.value.trim(),
    state: staIputRef.value,
    priority: prioInputRef.value,
    id: id,
  });
  console.log(typeof titleInputRef.value);
  render();
  titleInputRef.value = "";
  desInputRef.value = "";
  staIputRef.value = "";
  prioInputRef.value = "";
};
