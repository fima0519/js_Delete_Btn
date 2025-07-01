let deleteText = document.getElementById("deleteText");
let deleleTying = document.getElementById("deleleTying");
let deleteBtn = document.getElementById("deleteBtn");

deleleTying.addEventListener("keyup", () => {
  if (deleleTying.value == "Delete") {
    deleteBtn.disabled = false;
  }
  else{
    deleteBtn.disabled = true;
  }
});

deleteBtn.addEventListener("click", () => {
    deleteText.style.display= "none";
});
