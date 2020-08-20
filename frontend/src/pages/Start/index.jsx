import React from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../../layout/';
import Wrapper from './styles';
import { Grid, Button } from "@material-ui/core";
import '../../index.css';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';

const Start = () => {
  let history = useHistory();

  const onClickRedirectPathHandler = name => e => {
    history.push(name);
  };

  return (
    <Layout>
      <Wrapper>
        <Grid container className="root" justify="center" alignItems="center">
          <Grid item xs={12}>
            <SettingsRoundedIcon className="btnset" onClick={onClickRedirectPathHandler('/Settings')}></SettingsRoundedIcon>
          </Grid>
          <Grid item xs={12} className="logo">
            <p>NaReBar</p>
            <div className="btndiv">
              <Button
                className="btnCleaning"
                variant="contained"
                onClick={onClickRedirectPathHandler('/Cleaning')}
                startIcon={<InvertColorsIcon/>}
              >
                세척 모드
              </Button>
              <Button
                className="btnStart"
                variant="contained"
                onClick={onClickRedirectPathHandler('/MenuList')}
                startIcon={<LocalBarIcon/>}
              >
                메뉴 선택
              </Button>
            </div>

          </Grid>
        </Grid>
      </Wrapper>
    </Layout>
  );
};

export default Start;
