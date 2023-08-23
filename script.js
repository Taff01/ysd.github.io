const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

taskInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter" && taskInput.value.trim() !== "") {
    addTask(taskInput.value.trim());
    taskInput.value = "";
  }
});

function addTask(taskText) {
  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="deleteBtn">Sil</button>
  `;
  taskList.appendChild(li);
  
  const deleteBtn = li.querySelector(".deleteBtn");
  deleteBtn.addEventListener("click", function() {
    taskList.removeChild(li);
  });
}
