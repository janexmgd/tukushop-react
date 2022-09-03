import React, { Fragment } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <Fragment>
      <OwlCarousel
        className='owl-theme pt-4'
        loop
        margin={0}
        stagePadding={230}
        nav={true}
        center={true}
        startPosition={5}
        autoPlay={true}
        style={{
          width: '100%',
        }}
      >
        {/* category */}
        <Link to='/category/1' className='text-decoration-none text-reset'>
          <div
            className='d-flex align-items-center justify-content-center'
            style={{
              height: '180px',
              width: '180px',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundImage: "url('/promotion1.webp')",
              borderRadius: '10px',
            }}
          >
            <h2 style={{ color: '#FFF' }}>1</h2>
          </div>
        </Link>
        {/* category */}
        <div
          className='d-flex align-items-center justify-content-center'
          style={{
            height: '180px',
            width: '180px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: "url('/promotion1.webp')",
            borderRadius: '10px',
          }}
        >
          <h2 style={{ color: '#FFF' }}>2</h2>
        </div>
        {/* category */}
        <div
          className='d-flex align-items-center justify-content-center'
          style={{
            height: '180px',
            width: '180px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: "url('/promotion1.webp')",
            borderRadius: '10px',
          }}
        >
          <h2 style={{ color: '#FFF' }}>3</h2>
        </div>
        {/* category */}
        <div
          className='d-flex align-items-center justify-content-center'
          style={{
            height: '180px',
            width: '180px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: "url('/promotion1.webp')",
            borderRadius: '10px',
          }}
        >
          <h2 style={{ color: '#FFF' }}>4</h2>
        </div>
        {/* category */}
        <div
          className='d-flex align-items-center justify-content-center'
          style={{
            height: '180px',
            width: '180px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: "url('/promotion1.webp')",
            borderRadius: '10px',
          }}
        >
          <h2 style={{ color: '#FFF' }}>5</h2>
        </div>
        {/* category */}
      </OwlCarousel>
    </Fragment>
  );
};

export default Category;
