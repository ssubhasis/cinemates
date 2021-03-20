// import React from 'react';

// export default function ReviewPage() {

//     return (
//         <div>
//             <h1>Review</h1>
//         </div>
//     );
// }


import SwiperCore, { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
SwiperCore.use([Virtual]);




export default () => {
  // Create array with 1000 slides
  const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  return (
      <div>
      <h1> hi</h1>
    <Swiper spaceBetween={50} slidesPerView={3} virtual>
      {slides.map((slideContent, index) => {
        <SwiperSlide key={slideContent} virtualIndex={index}>
          {slideContent}
        </SwiperSlide>;
      })}
    </Swiper>
    </div>
  );
};