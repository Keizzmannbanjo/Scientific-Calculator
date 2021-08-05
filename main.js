// * Initialize all variables
let calcKeys = document.querySelectorAll(".calc-key"),
  input = document.querySelector(".input"),
  output = document.querySelector(".output"),
  clearBtn = document.querySelector("#clearBtn"),
  equalsBtn = document.querySelector("#equalsBtn");

calcKeys.forEach((item) => {
  item.addEventListener("click", calcKeysClicked);
});

clearBtn.addEventListener("click", clearinput);

// * Solves user inputs operation
function calculateInput(e) {
  let text = input.innerHTML;
  text = text.replace(/\u00F7/g, "/");
  let p = Math.PI.toString();
  text = text.replace(/\u03C0/g, p);
  let found = text.match(/\u221A\d+/g);
  found.forEach((item) => {
    let count = 0;
  });
  output.innerHTML += `\n\n\t${result}`;
  e.stopImmediatePropagation();
}

// * Handles keys that were clicked
function calcKeysClicked(e) {
  if (e.target.id == "equalsBtn") {
    output.innerHTML = "";
    calculateInput(e);
  } else {
    input.innerHTML += e.target.dataset.keyvalue;
  }
}

// * Clears the screen
function clearinput(e) {
  input.innerHTML = "";
  output.innerHTML = "";
}
