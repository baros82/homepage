console.log("Hello World");

let button = document.querySelector(".js-object__button");
let object = document.querySelector(".js-object");


button.addEventListener("click", () => {

   object.innerText = (object.innerText === "🍕")
      ? "🍽️" : "🍕"

   button.innerText = (button.innerText === "Zjedz kawałek")
      ? "Zrób nowy" : "Zjedz kawałek"

});

