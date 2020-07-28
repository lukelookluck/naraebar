import React from 'react';
import Header from './Header/';
import NavigationTab from './NavigationTab/'

const Layout = props => {
  const { children } = props;

  return (
    <div>
      <Header></Header>
      <NavigationTab></NavigationTab>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
