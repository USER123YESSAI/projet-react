import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Slideshow from "../components/Slideshow.jsx";
import LogementDetails from "../components/LogementDetails.jsx";

const Logement = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/logements.json");
        const data = await res.json();
        const found = data.find((l) => l.id === id);

        if (found) {
          setLogement(found);
        } else {
          navigate("/", { replace: true });
        }
      } catch (e) {
        console.error("Erreur chargement logement", e);
        navigate("/", { replace: true });
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id, navigate]);

  if (loading) {
    return <div className="logement-page">Chargement...</div>;
  }

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

