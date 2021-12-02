import React from "react";
import Card from "./Card";
import Card2 from "./Card2";
import "./style.css";
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

  return(
    <div className="App">
      <section className="cards">
       {cards}
      </section>

    </div>
  )
}
