import React, { useEffect } from "react";
import { useState } from "react";
import HiddenCards from "./Cards";
import Ace from "../../images/Ace.png";
import Jack from "../../images/Jack.png";
import Joker from "../../images/Joker.png";
import King from "../../images/King.png";
import Queen from "../../images/Queen.png";
import Ten from "../../images/Ten.png";



// Array of images to be used in the game
const images = [
  { "src": Ace, matched: false },
  { "src": Jack, matched: false  },
  { "src": Joker, matched: false },
  { "src": King, matched: false  },
  { "src": Queen, matched: false},
  { "src": Ten, matched: false }
]





const Main = () => {

  // Setting the state for the cards, turns, and choices
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);




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
    }
    else if (choiceTwo === null) {
      setChoiceTwo(card);
      
    } 
    else {
      return;
}
}



// Comparing the selected cards
useEffect(() => {

  if (choiceOne && choiceTwo) {
    // setting matched to matched cards array and matched value 
    if (choiceOne.src === choiceTwo.src) {
        setCards(MatchedCards =>{
          return MatchedCards.map(card => { 
            if (card.src === choiceOne.src) {
              return {...card, matched: true}}
            else {
              return card;
          }
        })
      })

      resetChoices();
      }
    else if (choiceOne.src !== choiceTwo.src){
        console.log("No Match"); 
        resetChoices();
      }
    else {
      setTimeout(() => resetChoices(), 2000);}
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
      
      <button className="MGbutton" onClick={shuffleCards}>Start New Game</button>
      <div className="card">
        {cards.map(card => 
        <HiddenCards 
        images={images} 
        key={card.id} 
        card={card} 
        selectedChoice={selectedChoice}
        flipped={card === choiceOne || card === choiceTwo || card.matched}
       />)}
      </div>
      <p>Attempts: {turns}</p>
    </>
  );

}


export default Main;