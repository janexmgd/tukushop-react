import React, { Fragment } from 'react';
import Product from '../components/Card/Product';
import Category from '../components/Carousel/Category';
import Promo from '../components/Carousel/Promo';

const Home = () => {
  return (
    <Fragment>
      <div
        className='d-flex flex-column container-fluid align-items-center'
        style={{ padding: '0px' }}
      >
        {/* promo */}
        <section className='container w-100 d-flex justify-content-center mb-4 mt-5'>
          <Promo />
        </section>
        {/* promo */}
        {/* category */}
        <section className='container mb-4'>
          <h3>Category</h3>
          <span className='text-secondary'>
            What are you currently looking for
          </span>
          <Category />
        </section>
        {/* category */}
        {/* new product */}
        <section className='container mb-4'>
          <h3 className=''>New</h3>
          <span class='text-secondary'>You’ve never seen it before!</span>
          <div className='row mt-4 d-flex justify-content-center'>
            {/* card here  */}
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            {/* card here  */}
          </div>
        </section>
        {/* new product */}
        {/* all product */}
        <section className='container mb-4'>
          <h3>Popular</h3>
          <span className='text-secondary'>
            Find clothes that are trending recently
          </span>
          <div className='row mt-4 d-flex justify-content-center'>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </section>
        {/* all product */}
      </div>
    </Fragment>
  );
};

export default Home;
