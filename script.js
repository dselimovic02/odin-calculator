const input = document.querySelector(".input");
const output = document.querySelector(".output");
const numbers = document.querySelectorAll("button.num");
const operators = document.querySelectorAll(".operator");
const negative = document.querySelector("button.negative");
const clear = document.querySelector("button#clear");
const del = document.querySelector("button#delete");
const equals = document.querySelector("button.equals");
const dot = document.querySelector(".dot");
const operation = {
    add: '<i class="fa-solid fa-plus"></i>',
    subtract: '<i class="fa-solid fa-minus"></i>',
    multiply: '<i class="fa-solid fa-xmark"></i>',
    divide: '<i class="fa-solid fa-divide"></i>'
};

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
    operator.addEventListener("click", () => {
        output.innerHTML = input.textContent + ` ${operation[operator.id]}`;
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