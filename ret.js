let calc = document.querySelector(".calc");
let inp = document.querySelector("input");


let res = 0;
let sum = "+";

calc.addEventListener("click", calcGo, event);

const clearButton = document.getElementById("clearBtn");

clearButton.addEventListener("click", () => {
   inp.value = ""; // Очищаем поле
});

function calcGo(event) {
   let tar = event.target.innerText
   let tarres = event.target.innerText
   if (tarres == "с") {

   }

   if (tar >= 0 || tar == ".") {
      inp.value += tar


   }
   if (tarres == "+" || tarres == "-" || tarres == "*" || tarres == "/") {
      res = inp.value
      inp.value = ""
      sum = tarres
   }
   if (tarres == "=") {
      if (sum == "+") res = Number(res) + Number(inp.value)
      if (sum == "-") res = Number(res) - Number(inp.value)
      if (sum == "*") res = Number(res) * Number(inp.value)
      if (sum == "/") res = Number(res) / Number(inp.value)



      inp.value = res
   }

   console.log(tar)


} 