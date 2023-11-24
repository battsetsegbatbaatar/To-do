const addBtnRef = document.getElementById("addBtn");
const backdrop = document.getElementsByClassName("backdrop");
console.log(addBtnRef);

addBtnRef.addEventListener("click", (event) => {
  const active = document.querySelectorAll(".active");
  console.log("click", active);
  active.forEach((element) => {
    element.style.display = "flex";
  });
});

const btnRef = document.getElementById("btn");
function newTask() {
  const titleInputRef = document.getElementById("title");
  const disInputRef = document.getElementById("description");
  if (titleInputRef.value === "" && disInputRef.value === "") {
    btnRef.addEventListener("click", () => {
      document.body.style = "warning";
    });
  }
}
