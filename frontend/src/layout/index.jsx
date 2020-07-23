import React from 'react';
import './style.css';

const Layout = props => {
  const { children } = props;

  return <div className="App">{children}</div>;
};

export default Layout;
