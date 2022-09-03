import React, { Fragment, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import BajuImg from '../../assets/img/baju.webp';
import StarImg from '../../assets/img/star.svg';
import * as Icon from 'react-bootstrap-icons';
import Product from '../../components/Card/Product';

const ProductDetail = () => {
  const [amount, setAmount] = useState(0);

  const handleAddAmount = () => {
    setAmount(amount + 1);
  };
  const handleSubstractionAmount = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    } else {
      setAmount(0);
    }
  };
  const { id } = useParams();
  useEffect(() => {
    document.title = 'Tukushop-Product Detail';
  }, []);

  return (
    <Fragment>
      <div className='d-flex justify-content-center align-items-center flex-column'>
        <section className='container row'>
          <div className='pt-4'>
            <span>
              <Link className='text-secondary text-decoration-none' to='/home'>
                Home/
              </Link>
            </span>
            <span>
              <Link
                className='text-secondary text-decoration-none'
                to='/category'
              >
                Category/
              </Link>
            </span>
            <span>
              <Link className='text-secondary text-decoration-none' to='#'>
                Tshirt
              </Link>
            </span>
          </div>
          {/* poto produk */}
          <div className='form-image col-xl-4 col-lg-4 col-md-12 col-sm-12 mt-4 '>
            <div>
              <img
                className='rounded'
                src={BajuImg}
                alt='product'
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
          {/* poto produk */}
          {/* info product */}
          <div className='col-xl-7 col-lg-7 col-md-12 col-sm-12 mt-4 ms-5'>
            <h2>Baju Muslim Pria</h2>
            <small className='text-secondary'>Zalora Cloth</small>
            <div className='pt-1 d-flex w-100'>
              <img src={StarImg} />
              <img src={StarImg} />
              <img src={StarImg} />
              <img src={StarImg} />
              <img src={StarImg} />
              <span>(10)</span>
            </div>
            <h6 className='pt-2 text-secondary'>Price</h6>
            <h2>$ 20.0</h2>
            {/* jumlah */}
            <div style={{ marginBottom: '40px', height: '80px' }}>
              <p
                style={{
                  margin: '20px',
                  fontWeight: '600',
                  marginLeft: '0px',
                  fontSize: '16px',
                  height: '20px',
                }}
              >
                Jumlah
              </p>
              <div
                style={{
                  fontWeight: '600',
                  marginBottom: '15px',
                  fontSize: '16px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <button
                  className='rounded-circle d-flex justify-content-center align-items-center'
                  style={{
                    width: '37px',
                    height: '37px',
                    backgroundColor: '#d4d4d4',
                    border: 'none',
                    border: '1px solid #d4d4d4',
                  }}
                  onClick={handleSubstractionAmount}
                >
                  <Icon.Dash color='white' />
                </button>
                <div
                  className='d-flex align-items-center justify-content-center'
                  style={{
                    width: '50px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '20px',
                    }}
                  >
                    {amount}
                  </span>
                </div>
                <button
                  className='rounded-circle d-flex justify-content-center align-items-center'
                  style={{
                    width: '37px',
                    height: '37px',
                    backgroundColor: '#d4d4d4',
                    border: 'none',
                    border: '1px solid #d4d4d4',
                  }}
                  onClick={handleAddAmount}
                >
                  <Icon.Plus color='white' />
                </button>
              </div>
            </div>

            {/* jumlah */}
            {/* button */}
            <div className='row w-100'>
              <button
                className='col-xl-3 col-lg-3 col-md-6 col-sm-5'
                style={{
                  height: '35px',
                  border: '1px solid #000000',
                  borderRadius: '25px',
                  fontSize: '16px',
                  backgroundColor: '#ffffff',
                  margin: '5px',
                }}
              >
                Chat
              </button>
              <button
                className='col-xl-3 col-lg-3 col-md-6 col-sm-5'
                style={{
                  height: '35px',
                  border: '1px solid #000000',
                  borderRadius: '25px',
                  fontSize: '16px',
                  backgroundColor: '#ffffff',
                  margin: '5px',
                }}
              >
                Add Bag
              </button>
              <button
                className='col-xl-5 col-lg-4 col-md-12 col-sm-12 mb-12'
                style={{
                  height: '35px',
                  border: '1px solid white',
                  borderRadius: '25px',
                  fontSize: '16px',
                  backgroundColor: '#db3022',
                  margin: '5px',
                  color: 'white',
                }}
              >
                Buy Now
              </button>
              {/* button */}
            </div>
          </div>
          {/* info product */}
        </section>
        <section className='container row mt-4'>
          <h2>Informasi Produk</h2>
          <h6>Condition</h6>
          <h6 className='text-danger'>New</h6>
          <h3>Description</h3>
          <div className='text-secondary'>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
              magna rutrum, pellentesque augue eu, sagittis velit. Phasellus
              quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Praesent sed enim vel
              turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique
              placerat. Pellentesque a consequat mauris, vel suscipit ipsum.
              Donec ac mauris vitae diam commodo vehicula. Donec quam elit,
              sollicitudin eu nisl at, ornare suscipit magna. Donec non magna
              rutrum, pellentesque augue eu, sagittis velit. Phasellus quis
              laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Praesent sed enim vel
              turpis blandit imperdiet ac ac felis. In ultricies rutrum tempus.
              Mauris vel molestie orci.
            </span>
          </div>
        </section>
        <section className='review container row mt-4'>
          <h2>Product review</h2>
          <div className='w-100' style={{ margin: '0px 6px' }}>
            <div className='d-flex'>
              <span
                style={{
                  fontSize: '42px',
                  fontWeight: '500',
                  marginTop: 'auto',
                  marginBottom: '0px',
                }}
              >
                5.0
              </span>
            </div>
            <div className='d-flex w-100'>
              <img src={StarImg} />
              <img src={StarImg} />
              <img src={StarImg} />
              <img src={StarImg} />
              <img src={StarImg} />
            </div>
          </div>
        </section>
        <section className='container row d-flex flex-column mb-5 mt-5'>
          <h2>You can also like this</h2>
          <small className='text-secondary'>
            {' '}
            You’ve never seen it before!{' '}
          </small>
          <div className='row'>
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
      </div>
    </Fragment>
  );
};

export default ProductDetail;
