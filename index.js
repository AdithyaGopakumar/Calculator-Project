"use strict";

// const display = document.querySelector(".display-text");

// function getValue(btn, valueOfBtn) {
//   let value;
//   document.querySelector(btn).addEventListener("click", getValueOfBtn);
//   function getValueOfBtn() {
//     value = valueOfBtn;
//     display.textContent = value;
//     console.log(value);
//   }
// }

// getValue(".nmbr-0", 0);
// getValue(".nmbr-1", 1);
// getValue(".nmbr-2", 2);
// getValue(".nmbr-3", 3);
// getValue(".nmbr-4", 4);
// getValue(".nmbr-5", 5);
// getValue(".nmbr-6", 6);
// getValue(".nmbr-7", 7);
// getValue(".nmbr-8", 8);
// getValue(".nmbr-9", 9);

// getValue(".addition", "add");
// getValue(".subtract", "sub");
// getValue(".multiply", "mul");
// getValue(".divide", "div");

// let output;
// let firstNum;
// let SecondNum;
// let opp;

// function operation(firstNum, SecondNum, opp) {
//   if (opp === "add") {
//     output = firstNum + SecondNum;
//     console.log(output);
//   } else if (opp === "sub") {
//     output = firstNum - SecondNum;
//     console.log(output);
//   } else if (opp === "mul") {
//     output = firstNum * SecondNum;
//     console.log(output);
//   } else if (opp === "div") {
//     output = firstNum / SecondNum;
//     console.log(output);
//   }
// }
// const userInput = [20, 10, "div"];

// operation(userInput[0], userInput[1], userInput[2]);

// display.innerText = Number(getValue(".nmbr-0", 0));

// const display = document.querySelector(".display-text");

// function getValue(btn) {
//   const btnPressed = document.querySelector(btn).addEventListener("click", opp);
//   function opp() {
//     let value = btnPressed.textContent;
//     console.log(value);
//     display.textContent = value;
//     return value;
//   }
//   const display = document.querySelector(".diplay-text");

//   // display.textContent = btnPressed.textContent;
// }
// console.log(typeof value);
// getValue(".nmbr-0");

let display = document.querySelector(".display-txt");
let btn = Array.from(document.querySelectorAll(".btn"));

btn.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.textContent) {
      case "Clr":
        display.textContent = "";
        break;
      case "Del":
        display.textContent = display.textContent.slice(0, -1);
        break;
      case "=":
        try {
          display.textContent = eval(display.textContent);
        } catch {
          display.textContent = "Error!";
        }
        break;
      default:
        display.textContent += button.textContent;
    }
  });
});
