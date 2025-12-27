import React, { useState } from 'react';
import './Slider.css';
const Slider = ({ items, title, category = 'vehicles' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };
  const currentItem = items[currentIndex];
  return (
    <div className="slider-container">
      <h3 className="slider-title">{title}</h3>
      <div className="slider-wrapper">
        <button className="slider-btn prev" onClick={prevSlide}>←</button>
        <div className="slide">
          <div className="slide-image-container">
            <img src={`/images/${category}/${currentItem.image}`}
              alt={currentItem.name}
              className="slide-image"
              onError={(e) => {
                e.target.onerror = null;
              }}
            />
          </div>
          <div className="slide-info">
            <h4>{currentItem.name}</h4>
            <p><strong>Класс:</strong> {currentItem.type}</p>
            {currentItem.damage ? (
              <p><strong>Урон:</strong> {currentItem.damage}</p>
            ) : (
              <p><strong>Скорость:</strong> {currentItem.speed}</p>
            )}
            <p><strong>Цена:</strong> {currentItem.price}</p>
            <p className="description">{currentItem.description}</p>
          </div>
        </div>
        <button className="slider-btn next" onClick={nextSlide}>→</button>
      </div>
      <div className="slider-dots">
        {items.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default Slider;