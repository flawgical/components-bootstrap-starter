import React from "react";
import "./style.css";
import Card from "./Card";
import cardsArr from './data'

console.log(cardsArr)

export default function App() {
  const cards = cardsArr.map((ele, index) => {
    return (
      <Card 
        img={ele.img}
        title={ele.title}
        text={ele.text}
        url={ele.url}
        key={index}
        />
    )
  })
  console.log(cards)
  return (
    <div className="App">
      <h1>Bootstrap Cards to Component</h1>
      <section className="cards">
      { cards }
      </section>
    </div>
  );
}
