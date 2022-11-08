function Add() {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let result = Number(number1) + Number(number2);
    document.getElementById("result").innerHTML = result
}

function Sub() {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let result = Number(number1) - Number(number2);
    document.getElementById("result").innerHTML = result
}
function Hmm() {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let result = Number(number1) * Number(number2);
    document.getElementById("result").innerHTML = result
}
function Mod() {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let result = Number(number1) / Number(number2);
    document.getElementById("result").innerHTML = result
}
function Ahh(){
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let result = Number(number1) % Number(number2);
    document.getElementById("result").innerHTML = result
}