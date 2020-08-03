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
          <h2 onClick={onClickRedirectPathHandler('/MenuList')}>시작하려면 화면을 눌러주세요</h2>
        </div>

      </Wrapper>
    </Layout>
  );
};

export default Start;
