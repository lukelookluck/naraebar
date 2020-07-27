import React from 'react';
import './style.css';
import Header from './Header/';

const Layout = props => {
  const { children } = props;

  return (
    <div className='App'>
      <Header></Header>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
