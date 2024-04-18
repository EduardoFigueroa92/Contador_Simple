//Añado funciones para los botones
let buttonValue; 

stopNumber = () => {
    buttonValue = parseInt(document.getElementById("number").innerHTML);
    document.getElementById("number").innerHTML = buttonValue;
    return;
}

resetNumber = () => {
    document.getElementById("number").innerHTML = 0;
    return;
}

resumeNumber = () => {
    buttonValue = parseInt(document.getElementById("number").innerHTML);
    document.getElementById("number").innerHTML = buttonValue;
    return;
}