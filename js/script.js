// Palidroma:
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


/**
 * function that returns true if the word in input is palindrome and return false if is not
 * 
 * @param {*} word input word (argument)
 * @returns 
 */
function isPali (word){

    let wordReverse = "";

    let i = word.length -1;

    while (i >= 0){

        wordReverse += word[i];

        i--;
    }

    if(word === wordReverse){
        return true;
    }

    return false;

}

const palindromeButton = document.querySelector("button");

const wrapperForm = document.querySelector(".my-wrapper-form");
    
const newDiv = document.createElement("div");

wrapperForm.appendChild(newDiv);


palindromeButton.addEventListener("click", function(){

    const userWord = document.getElementById("user-word").value;
    
    if(isPali(userWord)){
        
        newDiv.classList.remove("border-danger");
        newDiv.classList.add("mt-5", "p-5", "border", "border-success");
        newDiv.innerHTML = `the word ${userWord} is palindrome`;
    
    }
    else{
        
        newDiv.classList.remove("border-success");
        newDiv.classList.add("mt-5", "p-5", "border", "border-danger");
        newDiv.innerHTML = `the word ${userWord} is not palindrome`;
    }

});


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.



/**
 * function that return a random number between a minimum number and a maximum number inclusive
 * 
 * @param {*} minNumber 
 * @param {*} maxNumber 
 * @returns 
 */
function randomInt (minNumber, maxNumber){
    
    let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);

    return randomNumber;
}

/**
 * function that returns true if the sum of two numbers is even or return false if the sum is odd
 * 
 * @param {*} firstNumber 
 * @param {*} secondNumber 
 * @returns 
 */

function isSumEven (firstNumber, secondNumber){

    if(((firstNumber + secondNumber) % 2) == 0){

        return true;
    }

    return false;
}


const numberButton = document.querySelector("#button-number");

const wrapperFormNumbers = document.querySelector(".my-wrapper-form-numbers");
    
const newDivNumbers = document.createElement("div");


numberButton.addEventListener("click", function(){

    const checkEven = document.getElementById("pari").checked;

    const userNumber = Math.floor(document.getElementById("user-number").value);

    if(isNaN(userNumber) || (userNumber < 1 || userNumber > 5)){
        alert("hai inserito un valore non valido!");
    }

    const pcNumber = randomInt(1, 5);

    if(isSumEven(userNumber, pcNumber) && (checkEven)){

        newDivNumbers.innerHTML = `Goood You Win!! The sum beetwen your number:${userNumber} and pc number:${pcNumber} is even`;
        newDivNumbers.classList.add("mt-3", "fs-1", "text-bold");

        wrapperFormNumbers.appendChild(newDivNumbers);

    }

    else if(!(isSumEven(userNumber, pcNumber)) && !(checkEven)){

        newDivNumbers.innerHTML = `Goood You Win!! The sum beetwen your number:${userNumber} and pc number:${pcNumber} is odd`;
        newDivNumbers.classList.add("mt-3", "fs-1", "text-bold");

        wrapperFormNumbers.appendChild(newDivNumbers);

    }
    else{
            if(isSumEven(userNumber, pcNumber) && !(checkEven)){

                newDivNumbers.innerHTML = `You lose!! The sum beetwen your number:${userNumber} and pc number:${pcNumber} is even`;
                newDivNumbers.classList.add("mt-3", "fs-1", "text-bold");

                wrapperFormNumbers.appendChild(newDivNumbers);

            }
            else{
                newDivNumbers.innerHTML = `You lose!! The sum beetwen your number:${userNumber} and pc number:${pcNumber} is odd`;
                newDivNumbers.classList.add("mt-3", "fs-1", "text-bold");

                wrapperFormNumbers.appendChild(newDivNumbers);

            }

                
    }

})



