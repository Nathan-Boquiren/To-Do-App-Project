let cl = console.log;

const userInput = document.getElementById("input");
const addToListBtn = document.getElementById("add-to-list-btn");
let toDoList = document.getElementById("list");

function addToList() {
  let inputValue = userInput.value;

  if (inputValue !== "") {
    toDoList.innerHTML += `<li class="list-item"><button class="complete-btn">×</button><p class="list-item-txt">${inputValue}</p></li>`;
    userInput.value = "";
    toDoList.addEventListener("click", (event) => {
      if (event.target.classList.contains("complete-btn")) {
        const completeBtn = event.target;
        const itemTxt = event.target.nextElementSibling;
        completeBtn.style.backgroundColor = "white";
        completeBtn.classList.add("deleteBtn");
        completeBtn.classList.remove("complete-btn");
        itemTxt.style.color = "rgba(255, 255, 255, 0.726)";
        itemTxt.style.textDecoration = "line-through";
      } else if (event.target.classList.contains("deleteBtn")) {
        // const deleteBtn = document.querySelector(".deleteBtn");
        event.target.addEventListener("click", (event) => {
          let listItem = event.target.parentElement;
          listItem.remove();
          cl("an item was removed");
        });
      }
    });
  } else {
    alert("Bruh.");
  }
}

addToListBtn.addEventListener("click", addToList);

userInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addToList();
  }
});
