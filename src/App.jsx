import { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./App.css";

export default function App() {
  const [aniState, setAniState] = useState([]);
  const handleClick = () => {
    setAniState([...aniState, getRandomAnimal()]);
  };

  return (
    <div className="app">
      <div>
        <button onClick={handleClick}>Click this Button</button>
      </div>
      <div className="animal-list">
        {aniState.map((elVal, indexVal) => (
          <AnimalShow type={elVal} key={indexVal} />
        ))}
      </div>
    </div>
  );
}

function getRandomAnimal() {
  const animalArr = ["Cat", "Dog", "Cow", "Gator", "Horse"];
  return animalArr[Math.floor(Math.random() * animalArr.length)];
}
