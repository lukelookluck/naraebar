import React from 'react';
import Layout from '../../layout/';
// import Card from '../../components/Card/';
import Wrapper from './style';
import { Grid } from "@material-ui/core";
import dumpfile from '../dump.json';

const SelectCocktail = ({ match }) => {

  const Cocktails = dumpfile;

  var index = Cocktails.findIndex(item => item.id == match.params.cocktailId);

  const MyCocktail = dumpfile[index];

  return (
    <Layout>
      <Wrapper>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12}>
            <Grid item xs={6}>
              <h3>{MyCocktail.name}</h3>

            </Grid>
            <Grid item xs={6}>
              <img src={MyCocktail.img} alt={MyCocktail.name} className="cocktailImg"></img>
            </Grid>
          </Grid>
        </Grid>
      </Wrapper>
    </Layout>
  );
};

export default SelectCocktail;
