import React, { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/logo';
import FormRegisterCustomer from '../../components/auth/formRegister/customer';
import FormRegisterSeller from '../../components/auth/formRegister/seller';

const Register = () => {
  useEffect(() => {
    document.title = 'Tukushop-Register';
  }, []);
  const [active, setActive] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setActive('customer');
  }, []);
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className='container w-50 mt-5 metropolis'>
        <main className='d-flex justify-content-center align-items-center flex-column text-center'>
          <Logo />
          <span className='text-black pt-2' style={{ fontWeight: 'bold' }}>
            Please sign up with your account
          </span>
          {/* seller/buyer */}
          {active === 'customer' ? (
            <div className='mr-auto ml-auto bg-light mt-4 d-flex'>
              <button
                className='btn btn-danger rounded-0 text-white'
                style={{ width: '100px' }}
                onClick={() => setActive('customer')}
              >
                Customer
              </button>
              <button
                className='btn btn-outline-secondary pr-5 text-reset text-black rounded-0'
                style={{ width: '100px' }}
                onClick={() => setActive('seller')}
              >
                Seller
              </button>
            </div>
          ) : (
            <div className='mr-auto ml-auto bg-light mt-4 d-flex'>
              <button
                className='btn btn-outline-secondary pr-5 text-reset text-black rounded-0'
                style={{ width: '100px' }}
                onClick={() => setActive('customer')}
              >
                Customer
              </button>
              <button
                className='btn btn-danger rounded-0 text-white'
                style={{ width: '100px' }}
                onClick={() => setActive('seller')}
              >
                Seller
              </button>
            </div>
          )}
          {/* seller/buyer */}
          {/* form */}
          {active === 'customer' ? (
            <FormRegisterCustomer />
          ) : (
            <FormRegisterSeller />
          )}
          {/* form */}
        </main>
      </div>
    </Fragment>
  );
};

export default Register;
