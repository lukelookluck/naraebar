import React, { useContext } from 'react';
import { CommonContext } from '../../context/CommonContext';
import { Grid } from '@material-ui/core';
import Wrapper from './styles';
import { useHistory } from 'react-router-dom';

const Footer = () => {
  const { drawerOpen } = useContext(CommonContext);
  const history = useHistory();
  return (
    <Wrapper>
      <Grid container className="footer">
        <Grid item sm={12} md={8} className="left-box">
          <ul className="page">
            <li>
              <span
                onClick={() => {
                  history.push('/Terms');
                  window.scrollTo(0, 0);
                }}
              >
                Privacy Policy
              </span>
            </li>
          </ul>
          <ul className="info">
            <p>Copyright by Multicampus Co., Ltd. All rights reserved.</p>
          </ul>
        </Grid>
        <Grid item sm={12} md={4} className="right-box">
          <Grid className="text-box">
            <h2>SSAFY Gumi 3rd</h2>
            <h3>임창묵</h3>
            <h4>lymchgmk@gmail.com</h4>
          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Footer;
