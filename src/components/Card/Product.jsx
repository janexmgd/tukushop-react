import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ProductImg from '../../assets/img/product.webp';
import StarImg from '../../assets/img/star.svg';

const Product = () => {
  return (
    <Fragment>
      <Link
        to='/product/99'
        className='col-lg-3 col-md-6 col-sm-12 pb-3 text-reset text-decoration-none'
      >
        <div className='border shadow rounded'>
          <img
            src={ProductImg}
            alt='product'
            className='card-img-top w-100'
            style={{ width: '100%' }}
          />
          <div className='card-body d-flex flex-column ms-2'>
            <span className='card-text text-black'>
              Men's formal suit - Black & White
            </span>
            <span className='text-danger pt-1'>$ 40.0</span>
            <span className='text-secondary pt-1'>Zalora Cloth</span>
            <div className='pt-1 d-flex w-100'>
              <img src={StarImg} />
              <img src={StarImg} />
              <img src={StarImg} />
              <img src={StarImg} />
              <img src={StarImg} />
              <span class=''>(10)</span>
            </div>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default Product;
