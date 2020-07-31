import React from 'react';
import Wrapper from './styles';

const Layout = props => {
  const { children } = props;

  return (
    <Wrapper>
      <div className="App">{children}</div>
    </Wrapper>
  );
};

export default Layout;
