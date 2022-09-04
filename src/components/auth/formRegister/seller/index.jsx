import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert2';
import { toastr } from '../../../../utils/toastr';

const FormRegisterSeller = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    storeName: '',
    password: '',
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/register-seller`, form)
      .then((res) => {
        swal
          .fire({
            title: 'Success!',
            text: res.data.message,
            icon: 'success',
          })
          .then(() => {
            navigate('/login');
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
  };
  return (
    <div>
      <form className='pt-5' onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            id='inputNameSeller'
            placeholder='Name'
            style={{ width: '400px' }}
            name='name'
            onChange={handleChange}
          />
        </div>
        <div className='form-group pt-3'>
          <input
            type='email'
            className='form-control'
            id='inputEmailSeller'
            placeholder='Email'
            style={{ width: '400px' }}
            name='email'
            onChange={handleChange}
          />
        </div>
        <div className='form-group pt-3'>
          <input
            type='text'
            className='form-control'
            id='inputPhoneSeller'
            placeholder='Phone Number'
            style={{ width: '400px' }}
            name='phone'
            onChange={handleChange}
          />
        </div>
        <div className='form-group pt-3'>
          <input
            type='text'
            className='form-control'
            id='inputStoreNameSeller'
            placeholder='Store Name'
            style={{ width: '400px' }}
            name='storeName'
            onChange={handleChange}
          />
        </div>
        <div className='form-group pt-3'>
          <input
            type='password'
            className='form-control'
            id='inputPasswordSeller'
            placeholder='Password'
            style={{ width: '400px' }}
            name='password'
            onChange={handleChange}
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
      <div className='pt-5 mb-3'>
        <span className='text-black'>Already have a Tokopedia account? </span>
        <Link to='/login' className='text-decoration-none text-danger'>
          Login
        </Link>
      </div>
    </div>
  );
};

export default FormRegisterSeller;
