var words = ['ziemia', 'zamek', 'tecza'];


const gameOn = function() {
    console.log("Gra się rozpoczęła")
    let live = 5,
        point = 0;

    // Get word from Array 
    let word = words[getRandomWord(words.length)];
    console.log(word);

    //createElement 
    createElement(word.length);


    // Get letter onClick
    const letterConteiner = document.querySelector(".letterConteiner");
    const getLetter = e => e.target.innerText;


    letterConteiner.addEventListener("click", e => {
        let letter = getLetter(e);

        if (writeLetter(letter, word)) {
            live--;
            if (live == 0) {
                console.log("Przegrałeś");
            }
        } else {
            ++point;
            if (point == word.length) {
                console.log("Gratulacje, wygrałeś!");
            }
        }
    });
}

const getRandomWord = length => Math.floor(Math.random() * length);
const createElement = length => {

    const conteinerForWord = document.getElementById("wordConteiner");

    for (let i = 0; i < length; i++) {
        wordLetters = document.createElement("div");
        wordLetters.classList.add("test");
        conteinerForWord.appendChild(wordLetters);
    }
}

const writeLetter = (letter, word) => {
    let miss = true;
    let tests = document.querySelectorAll(".test");
    for (let i = 0; i < word.length; i++) {

        if (letter.toLowerCase() == word[i]) {
            tests[i].innerText = letter;
            miss = false;
        }
    }

    return miss;
}


gameOn();


// Isuses to fix 
// How to end a game? 
// Multiplayers mode
// space in words;