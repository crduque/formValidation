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
    createAlert();
    console.log(1);
  }
  if (incompletedInputs().length !== 0) {
    event.preventDefault(); //se para si hay algun input vacio
    createAlert();
    console.log(2);
  }
  if (validCvc() == false) {
    event.preventDefault(); //se para si cvc no es un numero
    createAlert();
    console.log(3);
  }
  if (validPCode() == false) {
    event.preventDefault(); //se para si pcode no es un numero
    createAlert();
    console.log(4);
  }
  if (validAmount() == false) {
    event.preventDefault(); //se para si amount no coincide con la expresion regular
    createAlert();
    console.log(5);
  }
  if (validName() == false) {
    event.preventDefault(); //se para si amount no coincide con la expresion regular
    createAlert();
    console.log(6);
  }
  if (validLastName() == false) {
    event.preventDefault(); //se para si amount no coincide con la expresion regular
    createAlert();
    console.log(7);
  }
  if (validCity() == false) {
    event.preventDefault(); //se para si amount no coincide con la expresion regular
    createAlert();
    console.log(8);
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
  let myCard = document.querySelector("#card");
  if (isNaN(myCard.value)) {
    myCard.classList.add("is-invalid");
    return false; //false en caso de que mycard no sea un numero
  } else if (myCard.value.length != 16) {
    myCard.classList.add("is-invalid");
    return false; //false en caso de que mycard no sea 16
  } else {
    myCard.classList.add("is-valid");
    return true;
  }
}

function validCvc(event) {
  let myCvc = document.querySelector("#cvc");
  if (isNaN(myCvc.value)) {
    myCvc.classList.add("is-invalid");
    return false; //false en caso de que myCvc no sea un numero
  } else if (myCvc.value.length != 3) {
    myCvc.classList.add("is-invalid");
    return false; //false en caso de que mycvc no sea 3
  } else {
    myCvc.classList.add("is-valid");
    return true;
  }
}

function validPCode(event) {
  let myPCode = document.querySelector("#pcode");
  if (isNaN(myPCode.value)) {
    myPCode.classList.add("is-invalid");
    return false; //false en caso de que myPCode no sea un numero
  } else if (myPCode.value.length != 5) {
    myPCode.classList.add("is-invalid");
    return false; //false en caso de que myPCode no sea 3
  } else {
    myPCode.classList.add("is-valid");
    return true;
  }
}

function validAmount(event) {
  let myAmount = document.querySelector("#amount");
  let regularExpression = /^\d*(\.\d{0,2})?$/;
  if (regularExpression.test(myAmount.value)) {
    myAmount.classList.add("is-valid");
    return true;
  } else {
    myAmount.classList.add("is-invalid");
    return false; //false en caso de que myAmount tenga mas de dos decimales
  }
}

function validName(event) {
  let myName = document.querySelector("#name");
  let regularExpression = /^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$/;
  if (regularExpression.test(myName.value)) {
    myName.classList.add("is-valid");
    return true;
  } else {
    myName.classList.add("is-invalid");
    return false; //false en caso de que myName no sean solo letras
  }
}

function validLastName(event) {
  let myLastName = document.querySelector("#lastname");
  let regularExpression = /^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$/;
  if (regularExpression.test(myLastName.value)) {
    myLastName.classList.add("is-valid");
    return true;
  } else {
    myLastName.classList.add("is-invalid");
    return false; //false en caso de que myLastName no sean solo letras
  }
}

function validCity(event) {
  let myCity = document.querySelector("#city");
  let regularExpression = /^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$/;
  if (regularExpression.test(myCity.value)) {
    myCity.classList.add("is-valid");
    return true;
  } else {
    myCity.classList.add("is-invalid");
    return false; //false en caso de que myCity no sean solo letras
  }
}

function createAlert() {
  let alert = document.querySelector(".card-body");
  let myFirstDiv = document.querySelector("#alert");
  if (myFirstDiv == null) {
    let myDiv = document.createElement("div");
    myDiv.innerHTML = "Something went wrong.";
    myDiv.classList.add("alert");
    myDiv.classList.add("alert-danger");
    alert.insertBefore(myDiv, alert.firstChild);
    myDiv.id = "alert";
  } else {
  }
}
