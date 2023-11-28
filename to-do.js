const addBtnRef = document.getElementById("addBtn");

// + add button der darahad tsonh vvsch task hiih heseg
const active = document.querySelectorAll(".active");
addBtnRef.addEventListener("click", (event) => {
  console.log("click", active);
  active.forEach((element) => {
    element.style.display = "flex";
  });
  console.log(state.tasks);
});
// taskaa hiih hooson array
const state = {
  tasks: [],
};
const addTaskBtn = document.getElementById("btn");
addTaskBtn.addEventListener("click", () => {
  const active = document.querySelector(".active");
  if (active) {
    active.style.display = "none";
  }
  addTask();
});

// shine tsonhon deer utgaa awhiin tuld id duudsan
const titleInputRef = document.getElementById("title");
const desInputRef = document.getElementById("description");
const prioInputRef = document.getElementById("priority");
const staIputRef = document.getElementById("status");
const deleteBtn = document.getElementById("delete");

function render() {
  console.log(state.task);
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
    console.log(titRef);
    console.log(task);
    // icon nuudaa duudsan
    const doneIcon = document.createElement("i");
    doneIcon.classList.add("far", "circle-check");
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-xmark");
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

    console.log(task.state);
    if ((task.completed = !task.completed)) {
      // 4 baganaruu oruulah heseg
      if (task.state === "todo") {
        const todo = document.getElementById("todo");
        todo.appendChild(card);
        console.log(todo);
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
  state.tasks.push({
    Title: titleInputRef.value.trim(),
    description: desInputRef.value.trim(),
    state: staIputRef.value,
    priority: prioInputRef.value,
  });
  const warning = document.getElementById("warning");
  if (titleInputRef.value === "" || desInputRef.value === "") {
    warning.style.display = "flex";
  } else {
    warning.style.display = "none";
  }
  render();
  titleInputRef.value = "";
  desInputRef.value = "";
  staIputRef.value = "";
  prioInputRef.value = "";
};
