import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const FormRegisterCustomer = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
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
    console.log(form);
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
        <button
          type='submit'
          className='btn btn-danger mt-3'
          style={{ width: '400px', borderRadius: '25px' }}
        >
          Submit
        </button>
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

export default FormRegisterCustomer;
