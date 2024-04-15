import { useEffect, useRef, useState } from 'react';
import Row from './Row';

async function isWordValid(word) {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then((response) => response.json());
    return Array.isArray(response) && response.length > 0;
}

async function getRandomWord() {
    const response = await fetch(`https://it3049c-hangman.fly.dev/`).then((response) => response.json());
    const word = response.word;
    return word;
}

function isLetter(letter) {
    return letter.length === 1 && letter.match(/[a-z]/i);
}

export default function WordleGame() {
    const [gameConfig, setGameConfig] = useState({
        rows: 6,
        cols: 5,
        word: ''
    });

    const [status, setStatus] = useState("Welcome to Wordle");
    const [currRow, setCurrRow] = useState(0);
    const [currCol, setCurrCol] = useState(0);
    const [isWin, setIsWin] = useState(false);

    const [grid, setGrid] = useState(["     ", "     ", "     ", "     ", "     ", "     "]);

    useEffect(() => {
        async function fetchData() {
            const word = await getRandomWord();
            setGameConfig({ ...gameConfig, word });
        }
        fetchData();
    }, []);

    const wordleRef = useRef();

    useEffect(() => {
        wordleRef.current.focus();
    }, []);

    const handleEnter = async () => {
        if (currCol !== gameConfig.cols) {
            setStatus('The word is not complete');
            return;
        }

        let currGuess = grid[currRow];
        if (!(await isWordValid(currGuess))) {
            setStatus('The word is invalid');
            return;
        }
        else if (currGuess === gameConfig.word) {
            setStatus('CORRECT');
            setIsWin(true);
            setCurrRow(currRow + 1);
            return;
        }
        else if (currRow === gameConfig.rows - 1) {
            setStatus('Game Over');
            setIsWin(true);
            setCurrRow(currRow + 1);
            return;
        }

        let correctLettersInCorrectArr = [];
        [...currGuess].forEach((letter, index) => {
            if (gameConfig.word[index] === letter) correctLettersInCorrectArr.push(letter);
        });

        setStatus('Not correct yet!');

        setCurrRow(currRow + 1);
        setCurrCol(0);
    }

    const handelDeleteLetter = () => {
        if (isWin) return;

        if (grid[currRow][0] !== " ") {
            let newGuess = [...grid];
            newGuess[currRow] = grid[currRow].slice(0, currCol - 1) + " " + grid[currRow].slice(currCol);
            setGrid(newGuess);
            setCurrCol(currCol - 1);
        }
    }

    const handleTypeLetter = (letter) => {
        let newGuess = [...grid];
        newGuess[currRow] = grid[currRow].slice(0, currCol) + letter + grid[currRow].slice(currCol + 1);
        setGrid(newGuess);
        setCurrCol(currCol + 1);
    }

    const handleKeyDown = (event) => {
        if (isWin) return;

        if (event.key === `Enter`) {
            handleEnter();
            return;
        }

        if (event.key === `Backspace`) {
            handelDeleteLetter();
            return;
        }

        if (isLetter(event.key)) {
            if (grid[currRow].trim().length === gameConfig.cols) return;

            handleTypeLetter(event.key);
        }
    }

    return (
        <>
            <h1>Wordle Game</h1>
            {console.log(gameConfig.word)}
            <h3 className={`statusWordle ${isWin && "statusWordleWin"}`}>{status}</h3>
            <div className="wordle" ref={wordleRef} tabIndex="0" onKeyDown={handleKeyDown}>
                {grid.map((guess, index) => {
                    return <Row
                        key={index}
                        word={guess.toUpperCase()}
                        markColor={currRow > index}
                        correctWord={gameConfig.word.toUpperCase()} />
                })}
            </div>
        </>
    )
}
