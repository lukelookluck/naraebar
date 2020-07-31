import React from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../../layout/';
import Wrapper from './styles';


const Start = () => {
  let history = useHistory();

  const onClickRedirectPathHandler = name => e => {
    history.push(name);
  };

  return (
    <Layout>
      <Wrapper>
        <div className="container">
          <div className="logo" onClick={onClickRedirectPathHandler('/MenuList')}>
            <img src="images/logo1.png"></img>
          </div>
          <h1 onClick={onClickRedirectPathHandler('/MenuList')}>Touch to Start!</h1>
        </div>

      </Wrapper>
    </Layout>
  );
};

export default Start;
