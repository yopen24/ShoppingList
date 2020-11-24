var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteAll = document.getElementById("deleteAll");
// var remover = document.getElementsByClassName("remover");

function inputLength() {
  return input.value.length;
}

function checkDeleteButton() {
  var lista = document.getElementsByTagName("li");

  for (var i = 0; i < lista.length; i++) {
    let itemLi = lista[i];

    if (!itemLi.hasChildNodes.hasChildNodes) addDeleteButton(itemLi);
    console.log(itemLi);
  }
}

function addDeleteButton(li) {
  let bttn = document.createElement("button");
  bttn.style.background = "url('img/eliminar.png')";
  // bttn.textContent = "Delete";
  bttn.classList.add("delete");
  bttn.onclick = removeParent;
  li.appendChild(bttn);
}

function createListElement() {
  var li = document.createElement("li");
  // if (input.value.length <= 82) {
    li.appendChild(document.createTextNode(input.value + "  "));
    ul.appendChild(li);
    input.value = "";
    addDeleteButton(li);
  // } else {
  //   alert(
  //     "your task seems to be too long, make sure it is less than 82 characters"
  //   );
  // }
}

function tachar(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");
  }
}

function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent, false);
  evt.target.parentNode.remove();
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function clear() {
  ul.innerHTML = "";
}

checkDeleteButton();

ul.addEventListener("click", tachar);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

deleteAll.addEventListener("click", clear);
