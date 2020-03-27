delete Object.prototype; // throws a TypeError


console.log("Inside my main.js file");

var myDate = new Date();

console.log("the current date is", myDate);

// get the span from the page/document
//let mySpan = document.getElementById("theTime");
// change what the inner text of the span says
//mySpan.innerText = myDate.toString();

myFun();

function myFun(){
    console.log("inside my function");
}
