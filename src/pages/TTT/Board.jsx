import { PropTypes } from 'prop-types';

function Square({ value, onSquareClick }) {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
}

Square.propTypes = {
    value: PropTypes.string.isRequired,
    onSquareClick: PropTypes.func.isRequired,
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const checkLine = (a, b, c) => squares[a] && squares[a] === squares[b] && squares[a] === squares[c];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (checkLine(a, b, c)) {
            return squares[a];
        }
    }

    if (isBoardFull(squares)) return "Tie";

    return null;
}

function isBoardFull(squares) {
    return squares.every(square => square !== null);
}

export default function Board({ xIsNext, squares, onPlay }) {
    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }

        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? "X" : "O";
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner === "Tie") {
        status = "TIE !!!!";
    }
    else if (winner && winner !== "Tie") {
        status = "Winner: " + winner;
    }
    else {
        status = "Next Player: " + (xIsNext ? "X" : "O");
    }

    return (
        <>
            <h3 className='status'>{status}</h3>
            <div className="board-row">
                {squares.map((value, index) => (
                    <Square key={index} value={value} onSquareClick={() => handleClick(index)} />
                ))}
            </div>
        </>
    )
}