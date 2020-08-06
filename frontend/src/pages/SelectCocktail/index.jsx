import React from 'react';
import Layout from '../../layout/';
// import Card from '../../components/Card/';
import Wrapper from './style';
import { Grid } from "@material-ui/core";
import dumpfile from '../dump.json';
import Button from '../../components/Button';

const SelectCocktail = ({ match }) => {

  const Cocktails = dumpfile;

  var index = Cocktails.findIndex(item => item.id == match.params.cocktailId);

  const MyCocktail = dumpfile[index];

  const igrList = MyCocktail.ingredients.map((item) => {
    return (
      <Grid item xs>
        <div className="itemdiv">{item.igrname}</div>
        <div className="itemdiv">{item.amount} ml</div>
      </Grid>
    );
  });

  return (
    <Layout>
      <Wrapper>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={6} className="textGrid">
            <Grid>
              <h1>" {MyCocktail.name} "</h1>
              <h2>{MyCocktail.details}</h2>
              <hr style={{
                color: '#000000',
                backgroundColor: '#000000',
                height: .8,
                borderColor: '#000000',
                width: '80%',
                marginLeft: '10%'
              }} />
              <h3>레시피</h3>
            </Grid>
            <Grid container className="igrGrid">
              {igrList}
            </Grid>
            <Grid>
              <Button></Button>
            </Grid>
          </Grid>
          <Grid item xs={6} className="imgGrid">
            <img src={MyCocktail.img} alt={MyCocktail.name} className="cocktailImg"></img>
          </Grid>
        </Grid>
      </Wrapper>
    </Layout>
  );
};

export default SelectCocktail;
