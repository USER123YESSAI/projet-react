import React from "react";
import { Link } from "react-router-dom";
import logements from "../data/logements.json";

const DisplayCards = () => {
  return (
    <section className="logements-container">
      <ul className="logements-list">
        {logements.map((logement) => (
          <li key={logement.id} className="logement">
            <Link to={`/logement/${logement.id}`} className="logement-link">
              <figure className="logement-figure">
                <img
                  className="logement-figure-cover"
                  src={logement.cover}
                  alt={logement.title}
                />
                <figcaption className="logement-figure-figcaption">
                  <p className="logement-figure-figcaption-title">
                    {logement.title}
                  </p>
                </figcaption>
              </figure>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DisplayCards;
