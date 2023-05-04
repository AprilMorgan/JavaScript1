document.getElementById("myHeading").innerHTML="Hello World";
let headingContent = document.getElementById("myHeading").innerHTML;
console.log(headingContent);

const para = document.createElement("p");
const node = document.createTextNode("This is my text node");
para.appendChild(node);
let myDiv = document.getElementById("myDiv");
myDiv.appendChild(para);

function changeColor() {
      let colors = ("green", "yellow", "red", "blue");
      let random = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors(random);
}

function changeText(){
    id.innerHTML = "This element text has changed!";
}

document.getElementById("myButton").addEventListener("click", displayDate);
document.getElementById("myButton").addEventListener("click", updateColor);
function displayDate(){
    document.getElementById("myDate").innterHTML = Date();
}

function updateColor() {
    document.getElementById("myDate").style.color = "green";
}

let myPara = document.querySelectorAll(".para-1");
let myPara2 = document.querySelectorAll("p");
document.querySelectorAll(".para-1");
console.log(myPara);
myPara[2].style.color = "red";

function displayTime() {
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let am = true;
    console.log(hours);

}