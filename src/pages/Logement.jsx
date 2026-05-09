import { useParams } from "react-router-dom";
import logements from "../data/logements.json";
import Slideshow from "../components/Slideshow.jsx";
import LogementDetails from "../components/LogementDetails.jsx";

const Logement = () => {
  const { id } = useParams();
  const logement = logements.find((l) => l.id === id);

  if (!logement) {
    return (
      <div className="logement-page">
        <p>Logement introuvable.</p>
      </div>
    );
  }

  return (
    <main className="logement-page">
      <Slideshow images={logement.pictures || []} />
      <LogementDetails
        title={logement.title}
        location={logement.location}
        host={logement.host}
        rating={logement.rating}
        tags={logement.tags}
        description={logement.description}
        equipments={logement.equipments}
      />
    </main>
  );
};

export default Logement;
