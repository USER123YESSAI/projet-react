
import React, { useState } from "react";
import DisplayCards from "../components/DisplayCards.jsx";
import heroImg from "../assets/assets/image_home.png";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="main-home">
      <div className="banner">
        <img src={heroImg} alt="bannière kasa" onClick={openModal} />
        <p className="banner-title">Chez vous, partout et ailleurs</p>
      </div>

      <DisplayCards />

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={heroImg}
              alt="bannière kasa"
              style={{ width: "100%", height: "auto", borderRadius: 25, display: "block" }}
            />
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;



