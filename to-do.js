const addBtnRef = document.getElementById("addBtn");
const backdrop = document.getElementsByClassName("backdrop");
console.log(addBtnRef);

// + add button der darahad tsonh vvsch task hiih heseg
addBtnRef.addEventListener("click", (event) => {
  const active = document.querySelectorAll(".active");
  console.log("click", active);
  active.forEach((element) => {
    element.style.display = "flex";
  });
});
// taskaa hiih hooson array
const state = {
  tasks: [],
};
// shine tsonhon deer utgaa awhiin tuld id duudsan
const titleInputRef = document.getElementById("title");
const desInputRef = document.getElementById("description");
const prioInputRef = document.getElementById("priority");
const staIputRef = document.getElementById("status");
const deleteBtn = document.getElementById("delete");
const i = 0;
console.log(titleInputRef.value);
function render() {
  i++;
  //  vvsgesen arrayruu utga hiisn
  tasks.push({
    Title: titleInputRef,
    description: desInputRef,
    state: staIputRef,
    priority: prioInputRef,
    count: i,
  });
  state.tasks.forEach((task) => {
    //  shine elment vvsgesen
    const div = document.createElement("div");
    const done = document.createElement("div");
    const defailt = document.createElement("div");
    const edit = document.createElement("div");
    const titRef = document.createElement("h1");
    const desRef = document.createElement("p");
    const statusRef = document.createElement("div");
    const prioRef = document.createElement("div");

    // shine vvsgesen elementendee tsonhon deer bichsen utgaa oruulsn
    titRef.textContent = titleInputRef.value;
    desRef.textContent = desInputRef.value;
    statusRef.textContent = staIputRef.value;
    prioRef.textContent = prioInputRef.value;

    div.appendChild(done);
    div.appendChild(defailt);
    div.appendChild(edit);

    const card = document.getElementsByClassName("cards");
    card.appendChild(task);
    if (statusRef.value === "todo") {
      const todo = document.getElementById("card");
      todo.appendChild(card);
    }
    if (statusRef.value === "inprogress") {
      const inProgress = document.getElementById(inProgress);
      inProgress.appendChild(card);
    }
    if (statusRef.value === "stuck") {
      const stuck = document.getElementById(stuck);
      stuck.appendChild(card);
    }
    if (statusRef.value === "done") {
      const done = document.getElementById(done);
      done.appendChild(card);
    }
    deleteBtn.onclick = function () {};
  });
}
const btnRef = document.getElementById("btn");
btnRef.onclick = function () {
  task.completed = !task.completed;
  render();
};
function newTask() {
  if (titleInputRef.value === "" && desInputRef.value === "") {
    btnRef.addEventListener("click", () => {
      document.body.style = "warning";
    });
  }
  render();
}
