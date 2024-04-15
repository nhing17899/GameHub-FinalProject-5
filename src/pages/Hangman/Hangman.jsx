import React, { useState, useEffect } from 'react';
import man0 from '../../images/man0.png';
import man1 from '../../images/man1.png';
import man2 from '../../images/man2.png';
import man3 from '../../images/man3.png';
import man4 from '../../images/man4.png';
import man5 from '../../images/man5.png';
import man6 from '../../images/man6.png';

const Hangman = () => {
  const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState(new Set());
  const [remainingAttempts, setRemainingAttempts] = useState(6);
  const [gameState, setGameState] = useState('playing');
  const [inputLetter, setInputLetter] = useState('');
  const [incorrectGuesses, setIncorrectGuesses] = useState(new Set());

  useEffect(() => {
    fetchWord();
  }, []);

  const fetchWord = async () => {
    const response = await fetch('https://random-word-api.herokuapp.com/word');
    const data = await response.json();

    setWord(data[0].toLowerCase());
    console.log(data[0].toLowerCase());
  };

  const handleGuess = () => {

    if (gameState === 'playing' && inputLetter.match(/[a-z]/i)) {

      const letter = inputLetter.toLowerCase();
      const newGuessedLetters = new Set(guessedLetters);
      newGuessedLetters.add(letter);
      setGuessedLetters(newGuessedLetters);

      if (!word.includes(letter) && incorrectGuesses.has(letter) === false) {
        incorrectGuesses.add(letter);
        console.log(remainingAttempts);
        setRemainingAttempts(remainingAttempts - 1);
        console.log(remainingAttempts);

        if (remainingAttempts === 1) {
          setGameState('lost');
        }

      } 

      if (word.split('').every((char) => newGuessedLetters.has(char))) {
        setGameState('won');
      }
      
    }
    setInputLetter('');
  };

  const renderWord = () => {
    return word
      .split('')
      .map((letter, index) => (
        <span key={index} className="hangmanLetter">
          {guessedLetters.has(letter) ? letter + ' ' : '_ '}
        </span>
      ));
  };

  const displayGuessedLetters = () => {
    const guessesArr = [...guessedLetters];
    const incorrectGuesses = guessesArr.filter(char => !word.includes(char));

    return <p>Incorrect Guesses: {incorrectGuesses.join(' ')}</p>
  };

  const renderGameStateMessage = () => {

    if (gameState === 'won') {

      return <p>Good job! You won!</p>;

    } else if (gameState === 'lost') {

      return <p>Oh no! You lost. The word was: {word}</p>;

    } 
  };

  const renderImage = () => {
    if (remainingAttempts === 6) {
      return <img src={man6} />;
    }
    
    if (remainingAttempts === 5) {
      return <img src={man5} />;
    }

    if (remainingAttempts === 4) {
      return <img src={man4} />;
    }

    if (remainingAttempts === 3) {
      return <img src={man3} />;
    }

    if (remainingAttempts === 2) {
      return <img src={man2} />;
    }

    if (remainingAttempts === 1) {
      return <img src={man1} />;
    }

    if (remainingAttempts === 0) {
      return <img src={man0} />;
    }
  }

  return (
    <div>
      <h1 className='hangmanTitle'>Hangman</h1>

      <div className="hangman-container">

        <div className="man">{renderImage()}</div>

        <div className='toTheRight'>

          <div className="word">{renderWord()}</div>

          <div>
          <input
              type="text"
              maxLength="1"
              value={inputLetter}
              onChange={(e) => setInputLetter(e.target.value)}
            />
            <button onClick={handleGuess}>Go!</button>
          </div>

          <div>{renderGameStateMessage()}</div>

          <div>{displayGuessedLetters()}</div>

        </div>
      </div>
    </div>
  );
};

export default Hangman;
