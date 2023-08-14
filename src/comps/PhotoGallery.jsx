import '.././index.css';
import React, { useEffect, useState, useRef } from 'react';
import { UseFirestore } from '../hooks/UseFirestore';
const PhotoGallery = () => {
  let [limiter, limiterUpdate] = useState(50);
  const { docs } = UseFirestore('images', limiter);
  return (
    <div  className='masonryScrollContainer'>
    <div id='masonry' className='masonry-container'>
      {docs &&
        docs.map((obj, index) => ( // Added index as the second argument
        <div className='masonry-item' key={`masonry-item-${index}`}>
            <img src={obj.url} alt={`Image ${index + 1}`} />
          </div>
        ))}
    </div>
    </div>
  );
};

export default PhotoGallery;
