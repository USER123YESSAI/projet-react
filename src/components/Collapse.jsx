import { useState } from "react";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
<div className={`collapse ${isOpen ? 'open' : ''}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h2 className="collapse-header-title">{title}</h2>
        <div className={isOpen ? "collapse-header-image2" : "collapse-header-image1"}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25 20L15 10L5 20"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className={`collapse-content ${isOpen ? 'collapse-content--open' : 'collapse-content--closed'}`}>
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
    </div>
  );
};

export default Collapse;
