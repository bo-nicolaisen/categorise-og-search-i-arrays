const frugtOgGront = [
    "æble", "pære", "blomme", "banan", "jordbær",
    "hindbær", "solbær", "kirsebær", "vindrue", "stikkelsbær",
    "kartoffel", "gulerod", "løg", "rødbede", "agurk",
    "tomat", "peberfrugt", "spinat", "broccoli", "blomkål",
    "rosenkål", "majs", "græskar", "squash", "porre",
    "spidskål", "hvidkål", "salat", "ærter", "radise",
    "rabarber"
];

let myScore = 0

let answer = ""
newGame()

function newGame() {
    document.getElementById('svar').value = ""
    answer = getRandomItem(frugtOgGront)
    console.log(answer);
}



function getRandomItem(myArray) {
    const randomIndex = Math.floor(Math.random() * myArray.length);
    return myArray[randomIndex];
}



function guessCallback() {







    //--------------------------------------------------------------------
    /* du skal skrive denne del af  funktionen om, så brugeren bare skal gætte en af elementerne i arrayen, så det ikke er så svært!!*/

    /*  if (userInput == answer) {
         document.getElementById('feedback').innerHTML = `du har svarret ${userInput}..<br> og det er RIGTIGT!`
     } else {
         document.getElementById('feedback').innerHTML = `HA HA! forkert.<br> jeg tænkte på ${answer}`
     } */


    // toLowerCase er en string method, der konverterer alle bogstaver til smp, så man kan sammenligne dem uden at få fejl ved store og små bogstaver.

    let userInput = document.getElementById('svar').value //.toLowerCase()
    answer = answer.toLowerCase()

    console.log(frugtOgGront.includes(userInput));

    if (frugtOgGront.includes(userInput)) {
        document.getElementById('feedback').innerHTML = `du har svarret ${userInput}..<br> og det er RIGTIGT!`
    } else {
        document.getElementById('feedback').innerHTML = `HA HA! forkert.<br> jeg tænkte på ${answer}`
    }

    //--------------------------------------------------------------------


    newGame()
}

