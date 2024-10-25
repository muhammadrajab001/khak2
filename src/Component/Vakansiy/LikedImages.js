import React from 'react';
import './candidat.css'
const LikedImages = () => {
  const likedImages = JSON.parse(localStorage.getItem('likedImages')) || []; // Получаем лайкнутые изображения из localStorage

  return (
    <div>
      <h2>Лайкнутые картинки</h2>
      <div className='liked-images'>
        {likedImages.length > 0 ? (
          likedImages.map((image, index) => (
            <div key={index} className='liked-image-card'>
              <img src={image.imgSrc} alt={`Liked ${image.name}`} />
              <p>{image.name} - {image.role}</p>
            </div>
          ))
        ) : (
          <p>Нет лайкнутых картинок</p>
        )}
      </div>
    </div>
  );
};

export default LikedImages;
