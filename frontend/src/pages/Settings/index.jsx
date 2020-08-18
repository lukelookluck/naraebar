import React, {useEffect, useState, Fragment} from 'react';
import Layout from '../../layout/';
import Wrapper from './styles';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';

const Settings = () => {

    const [bottleList, setBottleList] = useState([]);

    function refreshList() {
        axios
          .get(`/bartender/bottle`, {
            headers: {
                'Access-Control-Allow-Origin' : '*'
              },
          })
          .then(res => {
            console.log(res.data);
            setBottleList(res.data);
          })
          .catch((err) => console.log(err + "왜 에러가 난걸까"));
      }
    
      useEffect(() => {
        refreshList();
      }, []);

      const nozzles = bottleList.map((item) => {
        return (
          <Grid item xs={3}>
            {
                item.volume === 0 
                ? (<Fragment></Fragment>)
                : (<Fragment></Fragment>)
            }
          </Grid>
        );
      });

    return (
        <Layout>
            <Wrapper>
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={12}>
                        <ArrowBackRoundedIcon></ArrowBackRoundedIcon>
                    </Grid>
                    <Grid item xs={12}>
                        {nozzles}
                    </Grid>
                </Grid>
            </Wrapper>
        </Layout>
    );
};

export default Settings;
