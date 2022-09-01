import React, { Fragment } from 'react';
import logo from '../../assets/img/logo.svg';

const Logo = () => {
  return (
    <Fragment>
      <div className='d-flex' style={{ height: '50px' }}>
        <img
          src={logo}
          alt=''
          style={{
            width: '38px',
            height: '38px',
            marginTop: 'auto',
            marginBottom: 'auto',
          }}
        />
        <div
          style={{
            fontSize: '25px',
            marginTop: 'auto',
            marginBottom: 'auto',
            color: '#DB3022',
          }}
        >
          Tukushop
        </div>
      </div>
    </Fragment>
  );
};

export default Logo;
