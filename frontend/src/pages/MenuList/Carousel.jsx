import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Wrapper from './style';
import dumpfile from "../dump.json";
import { Grid } from "@material-ui/core";

export default function () {

  const menuDump = dumpfile;

  let history = useHistory();

  const onClickRedirectPathHandler = name => e => {
    history.push(name);
  };
  
  const menu = menuDump.map((item) => {
    return (
      <Carousel.Item key={item.id} className="caroitem" onClick={onClickRedirectPathHandler('/SelectCocktail/' + item.id)}>
        <img src={item.img} alt={item.name} className="cocktailimg"></img>
        <Carousel.Caption>
          <h1>{item.name}</h1>
          <p>{item.details}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  return (
    <Wrapper>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} className="caro">
          <Carousel>
            {menu}
          </Carousel>
        </Grid>
      </Grid>
    </Wrapper>
  );

}