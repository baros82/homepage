console.log("Hello World");

let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");
let amountUsdElement = document.querySelector(".js-amount__usd");
let amountEurElement = document.querySelector(".js-amount__eur");
let amountPlnElement = document.querySelector(".js-amount__pln");
let amountArsElement = document.querySelector(".js-amount__ars");
let resultUsdElement = document.querySelector(".js-result__usd");
let resultEurElement = document.querySelector(".js-result__eur");
let resultPlnElement = document.querySelector(".js-result__pln");
let resultArsElement = document.querySelector(".js-result__ars");
let formElement = document.querySelector(".js-form")

formElement.addEventListener("submit", (event) => {
     event.preventDefault();


     if (amountUsdElement.selected && resultPlnElement.selected) {
          let amount = amountElement.value;
          let result = amount * 4.48;
          resultElement.value = result.toFixed(2);
     } else if (amountUsdElement.selected && resultUsdElement.selected) {
          let amount = amountElement.value;
          let result = amount * 1;
          resultElement.value = result;
     } else if (amountUsdElement.selected && resultEurElement.selected) {
          let amount = amountElement.value;
          let result = amount * 0.95;
          resultElement.value = result.toFixed(2);
     } else if (amountEurElement.selected && resultUsdElement.selected) {
          let amount = amountElement.value;
          let result = amount * 1.04;
          resultElement.value = result.toFixed(2);
     } else if (amountEurElement.selected && resultPlnElement.selected) {
          let amount = amountElement.value;
          let result = amount * 4.69;
          resultElement.value = result.toFixed(2);
     } else if (amountEurElement.selected && resultEurElement.selected) {
          let amount = amountElement.value;
          let result = amount * 1;
          resultElement.value = result;
     } else if (amountPlnElement.selected && resultPlnElement.selected) {
          let amount = amountElement.value;
          let result = amount * 1;
          resultElement.value = result;
     } else if (amountPlnElement.selected && resultUsdElement.selected) {
          let amount = amountElement.value;
          let result = amount * 0.22;
          resultElement.value = result.toFixed(2);
     } else if (amountPlnElement.selected && resultEurElement.selected) {
          let amount = amountElement.value;
          let result = amount * 0.21;
          resultElement.value = result.toFixed(2);
     } else if (amountPlnElement.selected && resultArsElement.selected) {
          let amount = amountElement.value;
          let result = amount * 37.79;
          resultElement.value = result.toFixed(4);
     } else if (amountArsElement.selected && resultPlnElement.selected) {
          let amount = amountElement.value;
          let result = amount * 0.026;
          resultElement.value = result.toFixed(4);
     } else if (amountArsElement.selected && resultEurElement.selected) {
          let amount = amountElement.value;
          let result = amount * 0.0057;
          resultElement.value = result.toFixed(4);
     } else if (amountEurElement.selected && resultArsElement.selected) {
          let amount = amountElement.value;
          let result = amount * 176.66;
          resultElement.value = result.toFixed(4);
     } else if (amountArsElement.selected && resultUsdElement.selected) {
          let amount = amountElement.value;
          let result = amount * 0.0060;
          resultElement.value = result.toFixed(4);
     } else if (amountUsdElement.selected && resultArsElement.selected) {
          let amount = amountElement.value;
          let result = amount * 167.65;
          resultElement.value = result.toFixed(4);
     } else if (amountArsElement.selected && resultArsElement.selected) {
          let amount = amountElement.value;
          let result = amount * 1;
          resultElement.value = result;
     }

});