import { Swiper, SwiperSlide } from 'Swiper/react';
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination
} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Test Data
import { slideData } from '../../test-data';


export const HomeSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={ 30 }
        effect={ 'fade' }
        navigation={ true }
        pagination={{
          clickable: true
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false
        }}
        modules={[
          Autoplay,
          EffectFade,
          Navigation,
          Pagination
        ]}
        className='mySwiper'
      >
        {
          slideData.map( ({ id, img, title, desc }) => (
            <SwiperSlide
              key={ id }
              style={{
                backgroundImage: `url( ${ img } )`
              }}
              className='slide-item'
            >
              <div className='slide-item'>
                <div className='item-description p-4 text-start'>
                  <h3>{ title }</h3>
                  <p>{ desc.slice(0, 75) }...</p>
                </div>
              </div>
            </SwiperSlide>
          ))
        } 
      </Swiper>
    </>
  );
}
