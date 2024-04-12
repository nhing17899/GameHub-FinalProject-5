import React from 'react';

const HangmanGame = () => {
    return (
        <>
        <div>
            <h1>Hangman</h1>
            <div className='man'></div>
            <div id='letterSpaces'></div>
            <div className='displayGuessedLetters'></div>
            <div className='inputLetter'></div>
        </div>
        </>
    )
}

export default HangmanGame;