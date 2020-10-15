/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

let myForm = document.querySelector("#ourForm"); //devuelve etiqueta form y todo su contenido

let theSubmitVar = myForm.addEventListener("submit", canSubmit);

function canSubmit(theSubmitVar) {
  if (validCreditCard() == false) {
    event.preventDefault(); //true
    console.log(1); //hay alguno vacio
  } else if (incompletedInputs().length !== 0) {
    event.preventDefault(); //true
    console.log(2);
  }
}

function incompletedInputs(event) {
  let element = document.querySelectorAll(".form-control"); //devuelve array que incluye todos los input con clase form-control
  let emptyInputs = [];
  for (let i = 0; i < element.length; i++) {
    if (element[i].value.length === 0) {
      emptyInputs.push(element[i]); //devuelve un array de todos los elementos con valor vacio
    }
  }
  return emptyInputs;
}

function validCreditCard(event) {
  let myCard = document.querySelector("#card").value;
  //   let cardValidation = myCard.value;
  if (isNaN(myCard)) {
    return false; //false en caso de que mycard no sea un numero
    console.log(false);
  } else {
    return true;
    console.log(true);
  }
}
