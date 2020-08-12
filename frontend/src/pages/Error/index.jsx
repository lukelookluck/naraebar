import React from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../../layout/';
import Wrapper from './styles';
import { Grid } from "@material-ui/core";
import '../../index.css';

const Error = () => {

  return (
    <Layout>
      <Wrapper>
        <Grid container className="root" justify="center" alignItems="center">
          <Grid item xs={12}>
            <h1>제조 중 문제가 발생했습니다 :(</h1>
            <h1 className="h12">전원을 끄고<br></br>기기를 확인해주세요!</h1>
          </Grid>
        </Grid>
      </Wrapper>
    </Layout>
  );
};

export default Error;
