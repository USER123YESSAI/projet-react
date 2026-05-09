import React, { useState } from 'react';

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) return null;

  return (
    <div className="slideshow">
      <div className="slideshow-container">
        <img src={images[currentIndex]} alt="" className="slideshow-container-img" />
      </div>
      <div className="slideshow-controls">
        <button className="slideshow-controls-chevron slideshow-controls-left" onClick={goToPrevious} aria-label="Précédent">
          <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M47 8L8 39L47 71" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className="slideshow-controls-chevron slideshow-controls-right" onClick={goToNext} aria-label="Suivant">
          <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 71L40 40L1 8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      {images.length > 1 && (
        <div className="slideshow-idx">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
};

export default Slideshow;
