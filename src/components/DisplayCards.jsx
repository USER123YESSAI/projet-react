import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DisplayCards = () => {
  const [logements, setLogements] = useState([]);
  const [loading, setLoading] = useState(true);
  fetch ("/logements.json")
   .then((res) => res.json())
   .then((data) => {
     setLogements(data);
     setLoading(false);
   })
   .catch((e) => {
     console.error("Erreur chargement logements.json", e);
     setLoading(false);
   });

  

  if (loading) return <section className="logements-container" />;

  return (
    <section className="logements-container">
      <ul className="logements-list">
        {logements.map((logement) => (
          <li key={logement.id} className="logement">
            <Link
              to={`/logement/${logement.id}`}
              className="logement-link"
            >
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

