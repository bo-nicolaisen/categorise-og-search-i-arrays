const baseArray = [
    ["æble", "pære", "blomme", "banan"], ["jordbær",
        "hindbær", "solbær", "kirsebær"], ["vindrue", "stikkelsbær",
        "kartoffel", "gulerod", "rødbede"], ["agurk",
        "tomat", "peberfrugt", "spinat"], [
        "rosenkål", "majs", "græskar"], ["squash", "porre",
        "spidskål", "hvidkål"], ["salat", "ærter", "radise",
        "rabarber"]
];

let frugtOgGront = []

let myScore = 0

let answer = ""
newGame()

function newGame() {
    document.getElementById('svar').value = ""
    frugtOgGront = getRandomItem(baseArray)
    console.table(frugtOgGront)
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

    // toLowerCase er en string method, der konverterer alle bogstaver til små, så man kan sammenligne dem uden at få fejl ved store og små bogstaver.
    let userInput = document.getElementById('svar').value.toLowerCase()
    answer = answer.toLowerCase()



    if (userInput == answer) {
        document.getElementById('feedback').innerHTML = `du har svarret ${userInput}..<br> og det er RIGTIGT!`
        myScore++// læg en til score
    } else {
        document.getElementById('feedback').innerHTML = `HA HA! forkert.<br> jeg tænkte på ${answer}`
        myScore-- // træk en fra score
    }

    //--------------------------------------------------------------------

    console.log(myScore);

    newGame()
}

