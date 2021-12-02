import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import "./style.css";

export default function App() {
  return(
    <div className="App">
      <h1>Bootstrap Cards to Component Example</h1>
      <section className="cards">
        <Card1 />
        <Card2 />
      </section>

    </div>
  )
}
