{
   const welcome = () => {
      console.log("Hello World");
   };

   const onButtonClick = () => {
      const object = document.querySelector(".js-object");
      object.innerText = (object.innerText === "🍕")
         ? "🍽️" : "🍕"

      button.innerText = (button.innerText === "Zjedz kawałek")
         ? "Zrób nowy" : "Zjedz kawałek"
   };

   const init = () => {
      const button = document.querySelector(".js-object__button");

      button.addEventListener("click", onButtonClick);
      
      welcome();
   };

   init();
};