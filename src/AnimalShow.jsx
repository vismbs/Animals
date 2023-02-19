import Cat from "./img/cat.svg";
import Bird from "./img/bird.svg";
import Cow from "./img/cow.svg";
import Dog from "./img/dog.svg";
import Gator from "./img/gator.svg";
import Horse from "./img/horse.svg";
import Heart from "./img/heart.svg";
import { useState } from "react";
import "./AnimalShow.css";

export default function AnimalShow({ type }) {
  const [click, setClick] = useState(0);
  const handleClick = () => {
    setClick(click + 1);
  };
  const aniObj = {
    Cat,
    Bird,
    Cow,
    Dog,
    Gator,
    Horse,
  };
  return (
    <div className="animal-show">
      <img
        className="animal"
        onClick={handleClick}
        src={aniObj[type]}
        alt={aniObj[type]}
        width={100}
        height={100}
      ></img>
      <img
        clasName="heart"
        src={Heart}
        alt="Heart"
        width={10 + 10 * click}
      ></img>
    </div>
  );
}
