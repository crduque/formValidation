/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

var listenerFunction = function () {
    document.querySelectorAll("onchange");
}
function isText() {
    var string = document.querySelector("#name").value;
    if (typeof string == "string"){
        return true;
    } else{ 
        return false;
    }
}
// function validateForm() {
//   var x = document.forms["myForm"]["fname"].value;
//   if (x == "") {
//     alert("Name must be filled out");
//     return false;
//   }
// }