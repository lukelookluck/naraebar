import React from 'react';
import './style.css';

const Layout = props => {
  const { children } = props;

  return (
    <div className='App'>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
