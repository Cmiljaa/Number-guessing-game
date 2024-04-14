class NumberGuess{

    constructor(){
        this.reset = document.querySelector('#reset');
        this.check = document.querySelector('#check');
        this.input = document.querySelector('input');
        this.result = document.querySelector('#result');
        this.guess = document.querySelector('#guesses');
        this.number = 0;
        this.guesses = 0;
        this.numbergenerator();
        this.eventListeners();
    }

    numbergenerator = () => this.number = Math.floor(Math.random() * 100);

    eventListeners = () =>{
        this.check.addEventListener('click', () => {
            if(this.input.value != "")
            {
                let inputnumber = parseInt(this.input.value);
                if(inputnumber != null && inputnumber == this.number)
                {
                    this.result.innerHTML = `Congratulations!`;
                    this.result.style.color = 'green'; 
                    this.guesses++; this.guess.innerHTML = `Number of attempts: ${this.guesses}`; 
                }
                else if(inputnumber < this.number)
                {
                    this.result.innerHTML = `Wrong number! Your number is too low!`;
                    this.result.style.color = 'red'; 
                    this.guesses++; this.guess.innerHTML = `Number of attempts: ${this.guesses}`;
                }
                else if(inputnumber > this.number)
                {
                    this.result.innerHTML = `Wrong number! Your number is too high!`;
                    this.result.style.color = 'red'; 
                    this.guesses++; this.guess.innerHTML = `Number of attempts: ${this.guesses}`; 
                }
            }
            else
                alert('Enter number!');
        })

        this.reset.addEventListener('click', () => {
            this.numbergenerator();
            this.result.innerHTML = "";
            this.input.value = "";
            this.guess.innerHTML = "";
            this.guesses = 0;
        })
    }
}

const game1 = new NumberGuess();