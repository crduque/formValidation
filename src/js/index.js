/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

let myForm = document.querySelector("#ourForm"); //devuelve etiqueta form y todo su contenido

let theSubmitVar = myForm.addEventListener("submit", canSubmit);

function canSubmit(theSubmitVar) {
  if (validCreditCard() == false) {
    event.preventDefault(); //se para si credit card no es un numero
    console.log(1);
  } else if (incompletedInputs().length !== 0) {
    event.preventDefault(); //se para si hay algun input vacio
    console.log(2);
  } else if (validCvc() == false) {
    event.preventDefault(); //se para si cvc no es un numero
    console.log(3);
  } else if (validPCode() == false) {
    event.preventDefault(); //se para si pcode no es un numero
    console.log(4);
  } else if (validAmount() == false) {
    event.preventDefault(); //se para si amount no coincide con la expresion regular
    console.log(5);
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
  if (isNaN(myCard)) {
    return false; //false en caso de que mycard no sea un numero
  } else if (myCard.length != 16) {
    return false; //false en caso de que mycard no sea 16
  } else {
    return true;
  }
}

function validCvc(event) {
  let myCvc = document.querySelector("#cvc").value;
  if (isNaN(myCvc)) {
    return false; //false en caso de que myCvc no sea un numero
  } else if (myCvc.length != 3) {
    return false; //false en caso de que mycvc no sea 3
  } else {
    return true;
  }
}

function validPCode(event) {
  let myPCode = document.querySelector("#pcode").value;
  if (isNaN(myPCode)) {
    return false; //false en caso de que myPCode no sea un numero
  } else if (myPCode.length != 5) {
    return false; //false en caso de que myPCode no sea 3
  } else {
    return true;
  }
}

function validAmount(event) {
  let myAmount = document.querySelector("#amount").value;
  let regularExpression = /^\d*(\.\d{0,2})?$/;
  if (regularExpression.test(myAmount)) {
    return true;
  } else {
    return false; //false en caso de que myAmount tenga mas de dos decimales
  }
}
