import '.././index.css';
import React, { useEffect, useState } from 'react';
import { UseFirestore } from '../hooks/UseFirestore';
useEffect
const PhotoGallery = () => {
  let [limiter, limiterUpdate] = useState(1n);
  
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const totalHeight = document.documentElement.scrollHeight -200;
  //     const currentPosition = window.scrollY + window.innerHeight;
  //     if (currentPosition >= totalHeight) {
  //       limiterUpdate((prevLimiter) =>prevLimiter + 20)
  //       console.log("You reached the bottom of the page!",  limiter);
  //     }
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);


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
