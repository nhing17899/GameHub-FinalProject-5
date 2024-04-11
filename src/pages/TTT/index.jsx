import { useState } from 'react';
import Board from './Board';

export default function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    
    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        setXIsNext(!xIsNext);
    }

    function onResetGameButtonClick() {
        setXIsNext(true);
        setHistory([Array(9).fill(null)]);
        setCurrentMove(0);
    }

    return (
        <>
            <h1>Tic Tac Toe Game</h1>
            <div className='game'>
                <div className='game-board'>
                    <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
                </div>
            </div>
            <button id="reset-game-button" className="btn btn-secondary" onClick={onResetGameButtonClick} style={{ marginTop: "2rem" }}>
                Reset
            </button>
        </>
    )
}
