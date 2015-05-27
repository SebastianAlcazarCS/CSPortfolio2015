// THis array contains the possible words
var words = ["HELLO" , "HOWDY" , "ISAAC" , "DERPY", "SWAGY" ];

//write a randomizer to set the specific word = to curWord

var randomNum = Math.random() * (4 - 0) + 0;
//This sets the current word equal to the randomly chosen word
curWord = words[0];

//document.getElementById("myBtn").addEventListener("click", displayDate);

var incLetters = document.getElementById("incLetters");

incLetters.innerHTML = "incorrect letters go here :( ";

// This part makes the correct letter show up

function checkLetter(letter){
    if (curWord.charAt(0) === letter){
        document.getElementById("letter1").innerHTML = letter;
    }
   
    else{
        incLetters.insertAdjacentHTML("beforeend",letter + " ");
    }
}

function checkLetter(letter){
    if (curWord.charAt(1) === letter){
        document.getElementById("letter2").innerHTML = letter;
    }
   
    else{
        incLetters.insertAdjacentHTML("beforeend",letter + " ");
    }
}

function checkLetter(letter){
    if (curWord.charAt(2) === letter){
        document.getElementById("letter3").innerHTML = letter;
    }
   
    else{
        incLetters.insertAdjacentHTML("beforeend",letter + " ");
    }
}

function checkLetter(letter){
    if (curWord.charAt(3) === letter){
        document.getElementById("letter4").innerHTML = letter;
    }
   
    else{
        incLetters.insertAdjacentHTML("beforeend",letter + " ");
    }
}

function checkLetter(letter){
    if (curWord.charAt(4) === letter){
        document.getElementById("letter5").innerHTML = letter;
    }
   
    else{
        incLetters.insertAdjacentHTML("beforeend",letter + " ");
    }
}

/*
var corLetters = document.getElementById("corLetters")

corLetters.innterHTML = "";
*/









