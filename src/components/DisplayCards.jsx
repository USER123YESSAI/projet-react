import React from "react";

import logements from "../data/logements.json";
import { Router } from "react-router-dom";
const DisplayCards = () => {
  return (
    <section>
        <ul>
{logements.map((logement) => {
 return <img src={logement.cover} key={logement.id} />
})}
        </ul>
    </section>
  )
}

export default DisplayCards;