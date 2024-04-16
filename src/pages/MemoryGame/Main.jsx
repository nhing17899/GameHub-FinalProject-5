import React, { useEffect } from "react";
import { useState } from "react";
import HiddenCards from "./Cards";



const images = [
  { "src": 'src\images/Ace.png', matched: false },
  { "src": 'src\images/Jack.jpg', matched: false  },
  { "src": 'src\images/Joker.jpg', matched: false },
  { "src": 'src\images/King.jpg', matched: false  },
  { "src": 'src\images/Queen.jpg', matched: false},
  { "src": 'src\images/Ten.jpg', matched: false }
]





const Main = () => {

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [matched, setMatched] = useState([]);



  // Shuffling cards using sort method and assigning a random id to each card using Math random method
  const shuffleCards = () => {
      const shuffledCards = [...images, ...images].sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random() 
      }))
    setCards(shuffledCards);
    setTurns(0);
  };


// recgonizing the selected card
const selectedChoice = (card) => {

    console.log(card);
    if (choiceOne === null) {
      setChoiceOne(card);
      //console.log('choice One = ' + choiceOne);
    }
    else if (choiceTwo === null) {
      setChoiceTwo(card);
      setTurns(turns + 1);
      //console.log('choice One = ' + choiceOne, 'choice two = ' + choiceTwo);
      
    } else {
      return;
}
}



// Comparing the selected cards
useEffect(() => {
  
  if (choiceOne && choiceTwo) {
    if (choiceOne.src === choiceTwo.src) {
        console.log("Match" + matched);
        setCards(cards.map(card => {
          if (card.src === choiceOne.src) {
            return {...card, matched: true}
          }
          return card;
        }));
        
        setMatched(true);


        resetChoices();
      }
    else if (choiceOne.src !== choiceTwo.src){
        console.log("No Match"); 
        resetChoices();
      }
    else {
      return;
    }
}
} , [choiceOne, choiceTwo]);

// Resetting the selected cards
const resetChoices = () => {
  setChoiceOne(null);
  setChoiceTwo(null);
  setTurns(prev => prev + 1);
}




return (
    <>
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card">
        {cards.map(card => 
        <HiddenCards 
        images={images} 
        key={card.id} 
        card={card} 
        selectedChoice={selectedChoice}/>)}

      </div>
      <p>Attempts: {turns}</p>
    </>
  );

}

export default Main;