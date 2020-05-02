// UI variables
const celsius = document.querySelector('#celsius');
const fahrenheit = document.querySelector('#fahrenheit');
const calculate = document.querySelector('#calculate');
//document.querySelector('#convert-form').addEventListener('submit',calculateResult);

calculate.addEventListener('click',calculateResult);

// Calculte function
function calculateResult(e){
    fahrenheit.value = (celsius.value*9/5)+32;
    e.preventDefault();
}