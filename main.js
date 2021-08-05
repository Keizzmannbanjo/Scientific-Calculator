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
  // ? Handles division symbol
  text = text.replace(/\u00F7/g, "/");

  // ? solves and replaces PI
  let p = Math.PI.toString();
  text = text.replace(/\u03C0/g, p);

  // ? Solves and replaces Square root operations
  let found = text.match(/\u221A\d+/g);
  if (found != null) {
    found.forEach((item) => {
      let num = item.substring(1, item.length);
      let ans = Math.sqrt(num);
      text = text.replace(item, ans.toString());
    });
  }

  // ? Solves and replaces sin operation
  found = text.match(/sin\d+/g);
  if (found != null) {
    found.forEach((item) => {
      let num = item.substring(3, item.length);
      let ans = Math.sin(num);
      text = text.replace(item, ans.toString());
    });
  }

  // ? Solves and replace cos operation
  found = text.match(/cos\d+/g);
  if (found != null) {
    found.forEach((item) => {
      let num = item.substring(3, item.length);
      let ans = Math.cos(num);
      text = text.replace(item, ans.toString());
    });
  }

  // ? Solves and replace tan operation
  found = text.match(/tan\d+/g);
  if (found != null) {
    found.forEach((item) => {
      let num = item.substring(3, item.length);
      let ans = Math.tan(num);
      text = text.replace(item, ans.toString());
    });
  }

  // ? Solves and replace log operation
  found = text.match(/log\d+/g);
  if (found != null) {
    found.forEach((item) => {
      let num = item.substring(3, item.length);
      let ans = Math.log(num);
      text = text.replace(item, ans.toString());
    });
  }

  result = eval(text);
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
