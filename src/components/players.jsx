import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import PlayerCard from './playercard'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";

const Players = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480);

  const renderPlayerCards = (count) => {
    return Array(count).fill(<PlayerCard />);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='players-container'>
      <h3>Goalkeepers</h3>
      <div className='players-grid'>
      {isMobile ? (
          <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={false}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          pagination={{el:'.swiper-pagination', clickable:true}}
          navigation={{
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev',
            clickable:true
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className='swiper-container'
        >
          <SwiperSlide>{<PlayerCard />}</SwiperSlide>
          <SwiperSlide>{<PlayerCard />}</SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <GrFormPreviousLink />
            </div>
           
            <div className="swiper-button-next slider-arrow">
              <GrFormNextLink />
            </div>

            <div className="swiper-pagination"></div>
            
          </div>
        </Swiper>
        ) : (
          renderPlayerCards(2)
        )}
      </div>
      <hr className='player-line'/>
      <h3>Defenders</h3>
      <div className='players-grid'>
      {isMobile ? (
          <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={false}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          pagination={{el:'.swiper-pagination', clickable:true}}
          navigation={{
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev',
            clickable:true
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className='swiper-container'
        >
          <SwiperSlide>{<PlayerCard />}</SwiperSlide>
          <SwiperSlide>{<PlayerCard />}</SwiperSlide>
          <SwiperSlide>{<PlayerCard />}</SwiperSlide>
          <SwiperSlide>{<PlayerCard />}</SwiperSlide>
          <SwiperSlide>{<PlayerCard />}</SwiperSlide>
          <SwiperSlide>{<PlayerCard />}</SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <GrFormPreviousLink />
            </div>
           
            <div className="swiper-button-next slider-arrow">
              <GrFormNextLink />
            </div>

            <div className="swiper-pagination"></div>
            
          </div>
        </Swiper>
        ) : (
          renderPlayerCards(6)
        )}
      </div>
      <hr className='player-line'/>
      <h3>Midfielders</h3>
      <div className='players-grid'>
      {isMobile ? (
          <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={false}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          pagination={{el:'.swiper-pagination', clickable:true}}
          navigation={{
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev',
            clickable:true
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className='swiper-container'
        >
          <SwiperSlide>{<PlayerCard />}</SwiperSlide>
          <SwiperSlide>{<PlayerCard />}</SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <GrFormPreviousLink />
            </div>
           
            <div className="swiper-button-next slider-arrow">
              <GrFormNextLink />
            </div>

            <div className="swiper-pagination"></div>
            
          </div>
        </Swiper>
        ) : (
          renderPlayerCards(2)
        )}
      </div>
      <hr className='player-line'/>
      <h3>Forwards</h3>
      <div className='players-grid'>
      {isMobile ? (
          <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={false}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          pagination={{el:'.swiper-pagination', clickable:true}}
          navigation={{
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev',
            clickable:true
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className='swiper-container'
        >
          <SwiperSlide>{<PlayerCard />}</SwiperSlide>
          <SwiperSlide>{<PlayerCard />}</SwiperSlide>
          <SwiperSlide>{<PlayerCard />}</SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <GrFormPreviousLink />
            </div>
           
            <div className="swiper-button-next slider-arrow">
              <GrFormNextLink />
            </div>

            <div className="swiper-pagination"></div>
            
          </div>
        </Swiper>
        ) : (
          renderPlayerCards(3)
        )}
      </div>
    </div>
  )
}

export default Players
