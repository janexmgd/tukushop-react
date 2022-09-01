import React from 'react';

const formLoginSeller = () => {
  return (
    <div>
      <form action='' className='pt-5'>
        <div className='form-group'>
          <input
            type='email'
            className='form-control'
            id='inputEmailSeller'
            aria-describedby='emailHelp'
            placeholder='Email'
            style={{ width: '400px' }}
          />
        </div>
        <div className='form-group pt-3'>
          <input
            type='password'
            className='form-control'
            id='inputPasswordSeller'
            placeholder='Password'
            style={{ width: '400px' }}
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
    </div>
  );
};

export default formLoginSeller;
