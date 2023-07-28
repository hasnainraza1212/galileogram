import '.././index.css';
import React, { useEffect, useState } from 'react';
import { UseFirestore } from '../hooks/UseFirestore';
useEffect
const PhotoGallery = () => {
  let [limiter, limiterUpdate] = useState('20')

  const { docs } = UseFirestore('images', limiter);
  return (
    <div className='masonry-container'>
      {docs &&
        docs.map((obj, index) => ( // Added index as the second argument
        <div className='masonry-item' key={`masonry-item-${index}`}>
            <img src={obj.url} alt={`Image ${index + 1}`} />
          </div>
        ))}
    </div>
  );
};

export default PhotoGallery;
