import React from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../../layout/';
import Wrapper from './styles';
import { Grid } from "@material-ui/core";
import '../../index.css';

const Start = () => {
  let history = useHistory();

  const onClickRedirectPathHandler = name => e => {
    history.push(name);
  };

  return (
    <Layout>
      <Wrapper>
        <Grid container className="root" justify="center" alignItems="center">
          <Grid item xs={12} className="logo" onClick={onClickRedirectPathHandler('/MenuList')}>
            <p>NaReBar</p>
            <h1>시작하려면 화면을 눌러주세요</h1>
          </Grid>
        </Grid>
      </Wrapper>
    </Layout>
  );
};

export default Start;
