// * Initialize all variables
let calcKeys = document.querySelectorAll(".calc-key"),
    input = document.querySelector(".input"),
    output = document.querySelector(".output"),
    clearBtn = document.querySelector("#clearBtn"),
    equalsBtn = document.querySelector("#equalsBtn"),
    backspaceBtn = document.querySelector("#backspaceBtn")

calcKeys.forEach((item) => {
    item.addEventListener("click", calcKeysClicked)
})
clearBtn.addEventListener("click", clearinput)
// backspaceBtn.addEventListener("click", deleteInput)

// * Solves user inputs operation
function calculateInput(e) {
    let text = input.value
    if (text == "" || text == undefined || text == null) {
        output.innerHTML = "Math Error"
        return
    }

    // ? Handles division symbol
    text = text.replace(/\u00F7/g, "/")

    // ? Handles euler's number symbol
    text = text.replace(/\u2107/g, "2.17828")

    // ? Handles power function
    text = text.replace(/\^/g, "**")

    // ? solves and replaces PI
    let p = Math.PI.toString()
    text = text.replace(/\u03C0/g, p)

    // ? Solves and replaces Square root operations
    let found = text.match(/\u221A\d+/g)
    if (found != null) {
        found.forEach((item) => {
            let num = item.substring(1, item.length)
            let ans = Math.sqrt(num)
            text = text.replace(item, ans.toString())
        })
    }

    found = text.match(/\d+\%/g)
    if (found != null) {
        found.forEach((item) => {
            let num = Number(item.substring(0, item.length - 1))
            num = num / 100
            text = text.replace(item, num.toString())
        })
    }

    // ? Solves and replaces sin or asin operation
    found = text.match(/(sin\d+)|(asin\d+)/g)
    if (found != null) {
        found.forEach((item) => {
            let num, ans
            if (item.substr(0, 4) == "asin") {
                num = item.substring(4, item.length)
                ans = 1 / Math.sin(num)
            } else {
                num = item.substring(3, item.length)
                ans = Math.sin(num)
            }
            text = text.replace(item, ans.toString())
        })
    }

    // ? Solves and replace cos or acos operation
    found = text.match(/(cos\d+)|(acos\d+)/g)
    if (found != null) {
        found.forEach((item) => {
            let num, ans
            if (item.substr(0, 4) == "acos") {
                num = item.substring(4, item.length)
                ans = 1 / Math.cos(num)
            } else {
                num = item.substring(3, item.length)
                ans = Math.cos(num)
            }
            text = text.replace(item, ans.toString())
        })
    }

    // ? Solves and replace tan or atan operation
    found = text.match(/(tan\d+)|(atan\d+)/g)
    if (found != null) {
        found.forEach((item) => {
            let num, ans
            if (item.substr(0, 4) == "atan") {
                num = item.substring(4, item.length)
                ans = 1 / Math.tan(num)
            } else {
                num = item.substring(3, item.length)
                ans = Math.tan(num)
            }
            text = text.replace(item, ans.toString())
        })
    }

    // ? Solves and replace log operation
    found = text.match(/log\d+/g)
    if (found != null) {
        found.forEach((item) => {
            let num = item.substring(3, item.length)
            let ans = Math.log(num)
            text = text.replace(item, ans.toString())
        })
    }

    // ? Solves and replace hexadecimal numbers
    found = text.match(/hex\d+/g)
    if (found != null) {
        found.forEach((item) => {
            let num = Number.parseInt(item.substring(3, item.length))
            let ans = num.toString(16).toUpperCase()
            output.innerHTML += `\n\n\t${ans}`
        })
        return
    }

    try {
        result = eval(text)
        output.innerHTML += `\n\n\t${result}`
    } catch (error) {
        input.value = ""
        output.innerHTML = "Math Error"
    }
    e.stopImmediatePropagation()
}

// * Handles keys that were clicked
function calcKeysClicked(e) {
    if (e.target.id == "equalsBtn") {
        output.innerHTML = ""
        calculateInput(e)
    } else {
        input.value += e.target.dataset.keyvalue
    }
}

// * Clears the screen
function clearinput(e) {
    input.value = ""
    output.innerHTML = ""
}
