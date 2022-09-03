import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { toastr } from '../../utils/toastr.js';
import swal from 'sweetalert2';

import Logo from '../../components/logo';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [active, setActive] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setActive('customer');
  }, []);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (active === 'customer') {
      axios
        .post(`${process.env.REACT_APP_API_URL}/auth/login-buyer`, form)
        .then((res) => {
          swal
            .fire({
              title: 'Success!',
              text: res.data.message,
              icon: 'success',
            })
            .then(() => {
              navigate('/home');
            });
        })
        .catch((err) => {
          if (err.response.data.message === 'failed in validation') {
            const error = err.response.data.error;
            error.map((e) => toastr(e, 'error'));
          } else {
            swal.fire({
              title: 'Error!',
              text: err.response.data.message,
              icon: 'error',
            });
          }
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      axios
        .post(`${process.env.REACT_APP_API_URL}/auth/login-seller`, form)
        .then((res) => {
          swal
            .fire({
              title: 'Success!',
              text: res.data.message,
              icon: 'success',
            })
            .then(() => {
              window.location.href = `/`;
            });
        })
        .catch((err) => {
          swal.fire({
            title: 'Error!',
            text: err.response.data.message,
            icon: 'error',
          });
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  return (
    <Fragment>
      <div className='container w-50 mt-5 metropolis'>
        <main className='d-flex justify-content-center align-items-center flex-column text-center'>
          {/* logo */}
          <Logo />
          {/* logo */}
          <span className='text-black pt-2' style={{ fontWeight: 'bold' }}>
            Please login with your account
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
          <div>
            <form onSubmit={handleSubmit} className='pt-5'>
              <div className='form-group'>
                <input
                  type='email'
                  className='form-control'
                  id='inputEmail'
                  aria-describedby='emailHelp'
                  placeholder='Email'
                  name='email'
                  style={{ width: '400px' }}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                  }}
                />
              </div>
              <div className='form-group pt-3'>
                <input
                  type='password'
                  className='form-control'
                  id='inputPassword'
                  placeholder='Password'
                  name='password'
                  style={{ width: '400px' }}
                  onChange={(e) => {
                    setForm({ ...form, password: e.target.value });
                  }}
                />
              </div>
              <div className='d-flex justify-content-end text-danger mt-3'>
                <a
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-decoration-none text-danger'
                >
                  Forgot password?
                </a>
              </div>
              {loading ? (
                <button
                  type='submit'
                  className='btn btn-danger mt-3'
                  style={{ width: '400px', borderRadius: '25px' }}
                  disabled
                >
                  <span
                    className='spinner-border spinner-border-sm'
                    role='status'
                    aria-hidden='true'
                  />
                </button>
              ) : (
                <button
                  type='submit'
                  className='btn btn-danger mt-3'
                  style={{ width: '400px', borderRadius: '25px' }}
                >
                  Submit
                </button>
              )}
            </form>
          </div>
          {/* form */}
          <div className='pt-5'>
            <span className='text-black'>Don't have a Tokopedia account? </span>
            <Link to='/register' className='text-decoration-none text-danger'>
              Register
            </Link>
          </div>
        </main>
      </div>
    </Fragment>
  );
};

export default Login;
