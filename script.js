const input = document.querySelector(".input");
const output = document.querySelector(".output");
const numbers = document.querySelectorAll("button.num");
const operators = document.querySelectorAll("operators");
const clear = document.querySelector("button#clear");
const del = document.querySelector("button#delete");
const equals = document.querySelector("button.equals");
const dot = document.querySelector(".dot");

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

clear.addEventListener("click", () => {
    input.textContent = "0";
});

del.addEventListener("click", () => {
    console.log(input.textContent.length);
    if(input.textContent.length < 2){
        input.textContent = "0";
    }else{
        let newValue = input.textContent.split('');
        newValue.splice(newValue.length-1);
        input.textContent = newValue.join('');    
    }
});