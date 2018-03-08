var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  var del = document.createElement("Button");
  li.appendChild(document.createTextNode(input.value + " "));
  del.appendChild(document.createTextNode("Delete"));
  ul.appendChild(li);
  li.appendChild(del);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement()
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function toggleitem(event) {
  event.target.classList.toggle("done");
}

function deleteItem(event){
  if (event.target.nodeName === "BUTTON") {
    var parent = event.target.parentElement.parentElement;
    var child = event.target.parentElement;
    parent.removeChild(child);
  }
}

button.addEventListener("click", addListAfterClick)
input.addEventListener("keypress", addListAfterKeypress)
ul.addEventListener("click", toggleitem)
ul.addEventListener("click", deleteItem)
