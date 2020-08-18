import React, { useState } from 'react';
import Carousel from './Carousel';
import { Grid, Button } from '@material-ui/core';
import Layout from '../../layout/';
import Wrapper from './style';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const MenuList = () => {
  // const [item, setItem] = useState([]);

  let history = useHistory();

  function goRandomMenu(name) {
    history.push(name);
  }

  const random = () => {
    axios
      .get(`/bartender/recipe/random`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then(res => {
        console.log(res.data);
        // setItem(res.data);
        console.log('아이디는 ' + res.data.id);
        goRandomMenu('/SelectCocktail/' + res.data.id);
      })
      .catch(err => console.log(err + ' 에러났음'));
  };

  return (
    <Layout>
      <Wrapper>
        <Carousel />
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12}>
            <Button className="btnRandom" variant="contained" onClick={random}>
              지금의 칵테일
            </Button>
          </Grid>
        </Grid>
      </Wrapper>
    </Layout>
  );
};

export default MenuList;
