import React from 'react';
import { Slide } from 'react-slideshow-image';

const images = [
  'assets/images/slideshowimg1.jpg',
  'assets/images/slideshowimg2.jpg',
  'assets/images/slideshowimg3.jpg',
  'assets/images/slideshowimg4.jpg',
  'assets/images/slideshowimg5.jpg',
  'assets/images/slideshowimg6.jpg'
];

const Slideshow = () => {
    return (
        <Slide
          images={images}
          duration={5000}
          transitionDuration={1000}
        />
    )
}

export default Slideshow;