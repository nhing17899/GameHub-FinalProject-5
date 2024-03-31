import { useState } from 'react'
import { WelcomeScreen } from './WelcomeScreen'
import { GameScreen } from './GameScreen'

const RPSGame = () => {
    const [name, setName] = useState(``);
    const [gameStarted, setGameStarted] = useState(false);

    return (
        <>
            <h1>Rock Paper Scissors Game</h1>
            {
                gameStarted
                    ? <GameScreen name={name} />
                    : <WelcomeScreen name={name} onNameChange={setName} onGameStart={() => setGameStarted(true)} />
            }
        </>
    )
}

export default RPSGame;