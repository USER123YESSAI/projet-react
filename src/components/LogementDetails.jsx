import Collapse from "./Collapse.jsx";

const Stars = ({ rating }) => {
  const count = parseInt(rating, 10) || 0;
  return (
    <div className="rating-star">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={i <= count ? "rating-star-red" : "rating-star-grey"}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const LogementDetails = ({ title, location, host, rating, tags, description, equipments }) => {
  return (
    <div className="logement-details">

      {/* Header : infos gauche + host droite */}
      <div className="logement-page-header">
        <div className="logement-page-header-infos">
          <h1 className="logement-page-header-infos-title">{title}</h1>
          <p className="logement-page-header-infos-subtitle">{location}</p>
          <div className="logement-page-header-infos-tags">
            {(tags || []).map((tag, i) => (
              <span key={i} className="logement-page-header-infos-tags-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="logement-page-header-host">
          <div className="logement-page-header-host-infos">
            <p className="logement-page-header-host-infos-name">{host?.name}</p>
            <img
              className="logement-page-header-host-infos-img"
              src={host?.picture}
              alt={host?.name}
            />
          </div>
          <Stars rating={rating} />
        </div>
      </div>

      {/* Collapses côte à côte */}
      <div className="logement-page-collapses">
        <div className="logement-page-collapses-content">
          <Collapse title="Description" content={description} />
        </div>
        <div className="logement-page-collapses-content">
          <Collapse title="Équipements" content={equipments || []} />
        </div>
      </div>

    </div>
  );
};

export default LogementDetails;
