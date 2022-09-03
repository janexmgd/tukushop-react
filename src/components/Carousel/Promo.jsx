import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../assets/styles/swiper.css';
const Promo = () => {
  return (
    <div className='d-flex flex-column mb-5' style={{ width: '100%' }}>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          576: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <div
            className='d-flex align-items-center justify-content-center'
            style={{
              height: '180px',
              width: '455px',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundImage: "url('/promotion1.webp')",
              borderRadius: '10px',
            }}
          >
            <h2 style={{ color: '#FFF' }}>Trending</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='d-flex align-items-center justify-content-center'
            style={{
              height: '180px',
              width: '455px',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundImage: "url('/promotion3.jpeg')",
              borderRadius: '10px',
            }}
          >
            <h2 style={{ color: '#FFF' }}>Trends in 2020</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='d-flex align-items-center justify-content-center'
            style={{
              height: '180px',
              width: '455px',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundImage: "url('/promotion2.webp')",
              borderRadius: '10px',
            }}
          >
            <h2 style={{ color: '#FFF' }}>Black Edition</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='d-flex align-items-center justify-content-center'
            style={{
              height: '180px',
              width: '455px',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundImage: "url('/promotion4.jpeg')",
              borderRadius: '10px',
            }}
          >
            <h2 style={{ color: '#FFF' }}>Autumn Theme</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Promo;
