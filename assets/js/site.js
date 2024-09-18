const frugtOgGront = [
    "Æble", "Pære", "Blomme", "Banan", "Jordbær",
    "Hindbær", "Solbær", "Kirsebær", "Vindrue", "Stikkelsbær",
    "Kartoffel", "Gulerod", "Løg", "Rødbede", "Agurk",
    "Tomat", "Peberfrugt", "Spinat", "Broccoli", "Blomkål",
    "Rosenkål", "Majs", "Græskar", "Squash", "Porre",
    "Spidskål", "Hvidkål", "Salat", "Ærter", "Radise",
    "Rabarber"
];

let myScore = 0

let answer = ""
newGame()


function newGame() {
    answer = getRandomItem(frugtOgGront)
    console.log(answer);
}



function getRandomItem(myArray) {
    const randomIndex = Math.floor(Math.random() * myArray.length);
    return myArray[randomIndex];
}



function guessCallback() {



    // toLowerCase er en string method, der konverterer alle bogstaver til smp, så man kan sammenligne dem uden at få fejl ved store og små bogstaver.
    let userInput = document.getElementById('svar').value.toLowerCase()
    answer = answer.toLowerCase()



    //--------------------------------------------------------------------
    /* du skal skrive denne del af  funktionen om, så brugeren bare skal gætte en af elementerne i arrayen, så det ikke er så svært!!*/

    if (userInput == answer) {
        document.getElementById('feedback').innerHTML = `du har svarret ${userInput}..<br> og det er RIGTIGT!`
    } else {
        document.getElementById('feedback').innerHTML = `HA HA! forkert.<br> jeg tænkte på ${answer}`
    }

    //--------------------------------------------------------------------


    newGame()
}

