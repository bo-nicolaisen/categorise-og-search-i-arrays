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
    let userInput = document.getElementById('svar')

    /* skriv kode her, der kan checke om brugeren har svarret rigtigt
    og vise resultatet og score til bruger i dom elementet feedback*/


    // eks.
    document.getElementById('feedback').innerHTML = `du har svarret ${userInput.value} svarret er ${answer}`
    newGame()
}

