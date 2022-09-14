//var myVariable; - soha ne használd !!!
let myVariable;
//console.log(myVariable);

myVariable = "new value"
//console.log(myVariable);

myVariable = 2;
//console.log(myVariable);

myVariable = true;
//console.log(myVariable);

let myVariable2 = "szöveg";
//console.log(myVariable2);

myVariable = myVariable2;
//console.log(myVariable2);

let myVariable3 = myVariable + myVariable2;
//console.log(myVariable3);

function sumVariables(veriable1, veriable2) {
    console.log(veriable1 + veriable2);
}
 sumVariables(myVariable, myVariable2);
 sumVariables(8, "nyolc");
 sumVariables("word1", "word2");

 function loadEvent() {
 console.log("loaded");
 let rootElement = document.getElementById("root");
 rootElement.insertAdjacentHTML("beforeend", "hello world")
 }

window.addEventListener("click", loadEvent());







