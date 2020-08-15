import React from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../../layout/';
import Wrapper from './styles';
import { Grid, Button } from "@material-ui/core";
import '../../index.css';
import LocalBarIcon from '@material-ui/icons/LocalBar';

const Start = () => {
  let history = useHistory();

  const onClickRedirectPathHandler = name => e => {
    history.push(name);
  };

  return (
    <Layout>
      <Wrapper>
        <Grid container className="root" justify="center" alignItems="center">
          <Grid item xs={12} className="logo">
            <p>NaReBar</p>
            <div>
              <Button
                className="btnCleaning"
                variant="contained"
                onClick={onClickRedirectPathHandler('/Cleaning')}
              >
                세척
              </Button>
              <Button
                className="btnStart"
                variant="contained"
                onClick={onClickRedirectPathHandler('/MenuList')}
                startIcon={<LocalBarIcon/>}
              >
                칵테일
              </Button>
            </div>

          </Grid>
        </Grid>
      </Wrapper>
    </Layout>
  );
};

export default Start;
