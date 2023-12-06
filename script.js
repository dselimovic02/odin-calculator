const input = document.querySelector(".input");
const output = document.querySelector(".output");
const numbers = document.querySelectorAll("button.num");
const operators = document.querySelectorAll(".operator");
const negative = document.querySelector("button.negative");
const clear = document.querySelector("button#clear");
const del = document.querySelector("button#delete");
const equals = document.querySelector("button.equals");
const dot = document.querySelector(".dot");
const operationSign = {
    add: '<i class="fa-solid fa-plus"></i>',
    subtract: '<i class="fa-solid fa-minus"></i>',
    multiply: '<i class="fa-solid fa-xmark"></i>',
    divide: '<i class="fa-solid fa-divide"></i>'
};
const operationExecute = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => {
        console.log(y == 0);
        if(y == 0){
            return "Error";
        }
        return x / y;
    }
};

let operation = '';
numbers.forEach(number =>{
    number.addEventListener("click", () => {
        if(input.textContent.length < 9){
            if(input.textContent == "0")
                input.textContent = "";

            input.textContent += number.textContent;
        }
    });
});

dot.addEventListener("click", () => {
    if(!input.textContent.includes(".")){
        input.textContent += ".";
    }
});

clear.addEventListener("click", clearAll);

del.addEventListener("click", () => {
    if( (input.textContent.length < 2) || (input.textContent.length < 3 && input.textContent.includes("-")) ){
        input.textContent = "0";
    }else{
        let newValue = input.textContent.split('');
        newValue.splice(newValue.length-1);
        input.textContent = newValue.join('');    
    }
});

negative.addEventListener("click", () =>{
    let newValue = input.textContent.split('');
    if(!input.textContent.includes("-")){
        newValue.unshift('-');
    }else{
        newValue.shift();
    }
    input.textContent = newValue.join('');
});

operators.forEach(operator => {
    operation = '';
    operator.addEventListener("click", () => {
        operation = operator.id;
        output.innerHTML = input.textContent + ` ${operationSign[operation]}`;
        clearInput();
    });
});

function clearInput(){
    input.textContent = "0";
}
function clearOutput(){
    output.textContent = "";
}
function clearAll(){
    clearInput();
    clearOutput();
}

equals.addEventListener("click", () =>{
    let firstNum = parseFloat(output.textContent.replace(' ', ''));
    let secondNum = parseFloat(input.textContent);
    let result = operationExecute[operation](firstNum, secondNum);
    console.log(result);
    if(result != "Error")
        result = Math.round((result + Number.EPSILON) * 100) / 100;

    output.innerHTML = firstNum + ` ${operationSign[operation]} ` + secondNum + " = " + result;
    input.textContent = result;
    operation = '';
});