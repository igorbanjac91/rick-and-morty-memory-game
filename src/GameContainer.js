import React, { useState } from "react";
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
      { id: nextId(), imageUrl: rick, name: "Rick Sanchez" },
      { id: nextId(), imageUrl: morty, name: "Morty Smith" },
      { id: nextId(), imageUrl: jerry, name: "Jerry Smith" },
      { id: nextId(), imageUrl: summer, name: "Summer Smith" },
      { id: nextId(), imageUrl: beth, name: "Beth Smith" },
      { id: nextId(), imageUrl: jessica, name: "Jessica" },
      { id: nextId(), imageUrl: principal, name: "Principal Gene Vagina" },
      { id: nextId(), imageUrl: goldenfold, name: "Mr. Goldenfold" },
      { id: nextId(), imageUrl: birdperson, name: "Ethan" },
      { id: nextId(), imageUrl: squanchy, name: "MC Haps" },
      { id: nextId(), imageUrl: brad, name: "Brad" },
      { id: nextId(), imageUrl: nancy, name: "Nancy" },    
    ]);

  return (
    <div>
      <CardsList cards={cards}/>
    </div>
  )
}

function CardsList(props) {

  let cardItems = props.cards.map((card) => {
    return <CardItem imageUrl={card.imageUrl} name={card.name} alt={card.name} key={card.id}/>
  });
  
  return (
    <ul>
      {cardItems}
    </ul>
  )
}


function CardItem(props) {

  console.log(props.imageUrl)
  return (
    <li key={props.key}> 
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