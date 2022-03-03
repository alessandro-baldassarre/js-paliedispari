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

