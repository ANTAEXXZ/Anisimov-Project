import React, { useState } from 'react';
import './Gallery.css';
const gallery = [
    { id: 1, title: "Майкл", image: "screenshot1.jpg" },
    { id: 2, title: "Тревор", image: "screenshot2.jpg" },
    { id: 3, title: "Франклин", image: "screenshot3.jpg" },
    { id: 4, title: "Преступная троица", image: "screenshot4.jpg" },
    { id: 5, title: "Туман в лесу", image: "screenshot5.jpg" },
    { id: 6, title: "Закат на горе", image: "screenshot6.jpg" },
    { id: 7, title: "Закат в городе", image: "screenshot7.jpg" },
    { id: 8, title: "Погоня возле автомойки", image: "screenshot8.jpg" },
    { id: 9, title: "Погоня в городе", image: "screenshot9.jpg" },
    { id: 10, title: "Небольшой водопад", image: "screenshot10.jpg" },
    { id: 11, title: "Вид на гору", image: "screenshot11.jpg" },
    { id: 12, title: "Знак Вайнвуд", image: "screenshot12.jpg" },
    { id: 13, title: "Домик в глуши", image: "screenshot13.jpg" },
    { id: 14, title: "Поезд в горах", image: "screenshot14.jpg" },
    { id: 15, title: "Вид с горы Чиллиад", image: "screenshot15.jpg" }
];
const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const openLightbox = (image) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden';
    };
    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };
    return (
        <section id="gallery" className="gallery">
            <div className="container">
                <h2 className="section-title">ГАЛЕРЕЯ СКРИНШОТОВ</h2>
                <p className="section-subtitle">Красивые моменты из мира GTA V</p>
                <div className="gallery-grid">
                    {gallery.map(item => (
                        <div key={item.id} className="gallery-item" onClick={() => openLightbox(item)}>
                            <img src={`/images/gallery/${item.image}`}
                                alt={item.title}
                                className="gallery-image"
                                loading="lazy"
                            />
                            <div className="gallery-overlay">
                                <p>{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {selectedImage && (
                    <div className="lightbox" onClick={closeLightbox}>
                        <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                            <img src={`/images/gallery/${selectedImage.image}`}
                                alt={selectedImage.title}
                                className="lightbox-image"
                            />
                            <button className="lightbox-close" onClick={closeLightbox} aria-label="Закрыть">
                                ✕
                            </button>
                            <p className="lightbox-title">{selectedImage.title}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};
export default Gallery;