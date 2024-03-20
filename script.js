let reset = document.querySelector('#reset');
let check = document.querySelector('#check');
let input = document.querySelector('input');
let result = document.querySelector('#result');
let guess = document.querySelector('#guesses'); 

let numbergenerator = () => Math.floor(Math.random() * 100);
let number = 0;
let guesses = 0;

window.onload = number = numbergenerator();

check.addEventListener('click', () => {
    if(input.value != "")
    {
        let inputnumber = parseInt(input.value);
        if(inputnumber != null && inputnumber == number)
        {
            result.innerHTML = `Congratulations!`;
            result.style.color = 'green'; 
            guesses++; guess.innerHTML = `Number of attempts: ${guesses}`; 
        }
        else if(inputnumber < number)
        {
            result.innerHTML = `Wrong number! Your number is too low!`;
            result.style.color = 'red'; 
            guesses++; guess.innerHTML = `Number of attempts: ${guesses}`;
        }
        else if(inputnumber > number)
        {
            result.innerHTML = `Wrong number! Your number is too high!`;
            result.style.color = 'red'; 
            guesses++; guess.innerHTML = `Number of attempts: ${guesses}`; 
        }
    }
    else
        alert('Type number!');
})

reset.addEventListener('click', () => {
    number = numbergenerator();
    result.innerHTML = "";
    input.value = "";
    guess.innerHTML = "";
    guesses = 0;
})