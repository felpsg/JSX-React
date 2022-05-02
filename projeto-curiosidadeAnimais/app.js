import { animals } from "./animals";
import React from "react";
import ReactDOM from "react-dom";

const title = "";

const background = (
  <img className="background" alt="ocean" src="/images/ocean.jpg" />
);

const images = [];

for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displayFact}
    />
  );
}

function displayFact(e) {
  console.log(animals);
  let animalName = e.target.alt;
  const animalInfo = animals[animalName];
  const optionIndex = Math.floor(Math.random() * animalInfo.facts.length);

  const funFact = animalInfo.facts[optionIndex];
  document.getElementById("fact").innerHTML = funFact;
}

const animalFacts = (
  <div>
    <h1>
      {title == "" ? "Clique em um animal para um fato divertido" : title}
    </h1>
    {background}
    <p id="fact"></p>
    <div className="animals">{images}</div>
  </div>
);

ReactDOM.render(animalFacts, document.getElementById("root"));
