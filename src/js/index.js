/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";
// let myForm = document.querySelector("form");
// myForm.submit = function isNumber() {
//   let myCard = document.querySelector("#card").value;
//   if (isNaN(parseInt(myCard))) {
//     // return true;
//     console.log(true);
//   } else {
//     // return false;
//     console.log(false);
//   }

window.isNumber = function isNumber() {
  let myCard = document.querySelector("#card");
  let cardValidation = myCard.value;

  if (isNaN(cardValidation)) {
    // return true;
    console.log(false);
  } else {
    // return false;
    console.log(true);
  }
};
// function createAlert() {
//     alert("Some fields are missing");
// };
