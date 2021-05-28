import React, { useEffect, useState } from "react";
import nextId from "react-id-generator";
import rick from "./img/Rick_Sanchez2.jpg"
import morty from "./img/Morty_Smith.png"
import jerry from "./img/Jerry_Smith.png";
import summer from "./img/Summer_Smith.jpg"
import beth from "./img/Beth_Smith.png"
import jessica from "./img/Jessica.png"
import principal from "./img/principal_gene_vagina.png"
import goldenfold from "./img/Mr._Goldenfold.png"
import birdperson from "./img/Birdperson.jpg"
import squanchy from "./img/Squanchy.jpg"
import brad from "./img/Brad.jpg"
import nancy from "./img/Nancy.png"

function GameContainer() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState(
    [
      { id: nextId(), imageUrl: rick, name: "Rick Sanchez", clicked: false },
      { id: nextId(), imageUrl: morty, name: "Morty Smith", clicked: false },
      { id: nextId(), imageUrl: jerry, name: "Jerry Smith", clicked: false },
      { id: nextId(), imageUrl: summer, name: "Summer Smith", clicked: false },
      { id: nextId(), imageUrl: beth, name: "Beth Smith", clicked: false },
      { id: nextId(), imageUrl: jessica, name: "Jessica", clicked: false },
      { id: nextId(), imageUrl: principal, name: "Principal Gene Vagina", clicked: false },
      { id: nextId(), imageUrl: goldenfold, name: "Mr. Goldenfold", clicked: false },
      { id: nextId(), imageUrl: birdperson, name: "Birdperson", clicked: false },
      { id: nextId(), imageUrl: squanchy, name: "Squanchy", clicked: false },
      { id: nextId(), imageUrl: brad, name: "Brad", clicked: false },
      { id: nextId(), imageUrl: nancy, name: "Nancy", clicked: false },    
    ]);

  function handleGuess(cardId) {
    setCards( [...shuffle(cards)] ) 
    let newCards = cards;
    cards.forEach(function checkGuessing(card, index) {
      if (card.id == cardId) {
        if (card.clicked === false) {
          setScore( score + 1 );
          if (score == bestScore) {
            setBestScore(bestScore + 1);
          }
        } else {
          setScore( 0 );
          resetGane();
        }
        newCards[index].clicked = true
        setCards( [...newCards] )
      }
    })
  }

  function resetGane(newCards) {
    newCards = cards;
    newCards.forEach(function setTofalse(card) {
      card.clicked = false;
    })
    setCards([...newCards]);
  }

  function shuffle(arr) {
    let newArr = arr;
    return newArr.sort(()=> Math.random() - 0.5)
  }
  
  return (
    <div>
      <div className="score">
        <span>Score: {score}</span><br/>
        <span>Best Score: {bestScore}</span>
      </div>
      <CardsList cards={cards} guessCard={handleGuess}/>
    </div>
  )
}

function CardsList(props) {

  let cardItems = props.cards.map((card) => {
    return <CardItem imageUrl={card.imageUrl} 
                     name={card.name} 
                     alt={card.name} 
                     key={card.id} 
                     guessCard={() => props.guessCard(card.id)}/>
  });
  
  return (
    <ul>
      {cardItems}
    </ul>
  )
}


function CardItem(props) {
  return (
    <li key={props.key} onClick={() => props.guessCard()}> 
      <div
        style={{
          backgroundImage: `url(${props.imageUrl})`,
        }}
        className="card">
      </div>
      <span>{props.name}</span>
    </li>
  )
}

export default GameContainer;