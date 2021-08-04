let calc_keys = document.querySelector("#keys");
let textBox = document.querySelector("textarea");

calc_keys.addEventListener("click", calcKeysClicked);

function calcKeysClicked(e) {
  e.preventDefault();
  if (e.target.tagName == "BUTTON") {
    textBox.value += e.target.dataset.keyvalue;
  }
}
