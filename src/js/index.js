/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

// window.isNumber = function isNumber() {
//   let myCard = document.querySelector("#card");
//   let cardValidation = myCard.value;

//   if (isNaN(cardValidation)) {
//     // return true;
//     console.log(false);
//   } else {
//     // return false;
//     console.log(true);
//   }
// };

let myForm = document.querySelector("#ourForm"); //devuelve etiqueta form y todo su contenido

myForm.addEventListener("submit", function isCompleted(event) {
  let element = document.querySelectorAll(".form-control"); //devuelve array que incluye todos los input con clase form-control
  //   console.log(element[0].value.length);
  let emptyInputs = [];
  for (let i = 0; i < element.length; i++) {
    if (element[i].value.length === 0) {
      emptyInputs.push(element[i]); //devuelve un array de todos los elementos con valor vacio
    }
  }
  //   console.log(emptyInputs);
  //   console.log(myForm);
  //   console.log(element);
  //   event.preventDefault();
  return emptyInputs;
});
