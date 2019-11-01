var words = ['ziemia', 'zamek', 'tecza', 'kwiat', 'komputer', 'telefon'];
var point = 0;

const gameOn = function() {

    // game start communicate 
    var liveConteiner = document.querySelector(".live");
    let live = 5;
    liveConteiner.innerText = "Pozostało " + live + "żyć";

    //clear boardConteiner for new game;
    const boardConteiner = document.querySelector('.boardConteiner');
    boardConteiner.innerHTML = '';

    // createGameBoard
    createGameBoard();

    // Get word from Array 
    let word = words[getRandomWord(words.length)];

    //createFloor for word letters 
    createFloor(word.length);

    // Get letter onClick
    const letterConteiner = document.querySelector(".letterConteiner");


    letterConteiner.addEventListener("click", e => {
        let letter = getLetter(e);

        if (writeLetter(letter, word)) {
            live--;
            liveConteiner.innerText = "Pozostało " + live + " żyć";
            if (live == 0)
                endGame(true);
        }
    });
};

const getLetter = e => {
    e.target.style.display = "none";
    return e.target.innerText;
}

const getRandomWord = length => Math.floor(Math.random() * length);
const createFloor = length => {
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
            ++point;
            if (point == word.length) {
                endGame(false);
            }
            tests[i].innerText = letter;
            miss = false;
        }
    }
    return miss;
};

const createGameBoard = () => {

    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'U', 'P', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z'];
    const boardConteiner = document.querySelector('.boardConteiner');


    // create letterConteiner
    const letterConteiner = document.createElement('div');
    letterConteiner.classList.add('letterConteiner');
    boardConteiner.prepend(letterConteiner);


    // create alphabet
    for (let i = 0; i < alphabet.length; i++) {
        let divLetter = document.createElement("div");
        divLetter.classList.add("letter");
        document.querySelector('.letterConteiner').appendChild(divLetter);
        divLetter.innerText = alphabet[i];
    }

    // create wordConteiner
    const wordConteiner = document.createElement('div');
    wordConteiner.id = 'wordConteiner';
    boardConteiner.prepend(wordConteiner);
};


const startButton = document.querySelector(".startGame");
startButton.addEventListener("click", () => {
    gameOn();
    startButton.disabled = true;
});

const endGame = isDead => {
    const boardConteiner = document.querySelector('.boardConteiner');
    boardConteiner.innerHTML = '';
    if (isDead) {
        boardConteiner.innerHTML = "<p class='communicate'>Przegrałeś - Liczba punktów: " + point + "</p>";
    } else {
        boardConteiner.innerHTML = "<p class='communicate'>Wygrałeś - Liczba punktów: " + point + "</p>";;
    }
    point = 0;

    const startButton = document.querySelector(".startGame");
    startButton.disabled = false;
};