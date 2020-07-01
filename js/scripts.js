/** state variables */

// var 
let a = null;
let b = null;
let c = null;
let result = null;

// elements 
let elementForm = null;
let elementA = null;
let elementB = null;
let elementC = null;
let elementResult = null;

/** application */
window.addEventListener("load", () => {
  elementForm = document.querySelector("form");
  elementResult = document.querySelector("#result");
  elementA = document.querySelector("#a");
  elementB = document.querySelector("#b");
  elementC = document.querySelector("#c");
  
  calculate();
});

function calculate() {
  elementForm.addEventListener("submit", (event) => {
    event.preventDefault();

    a = parseFloat(elementA.value);
    b = parseFloat(elementB.value);
    c = parseFloat(elementC.value);
    let sum = a + b + c;
    elementResult.innerHTML = `Seu resultado é: ${sum}`;
  });
}


