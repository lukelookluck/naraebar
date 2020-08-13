import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import Wrapper from './style';
import { Grid } from "@material-ui/core";
import { CommonContext } from "../../context/CommonContext";
import axios from "axios";

export default function () {

  let history = useHistory();
  const onClickRedirectPathHandler = name => e => {
    history.push(name);
  };


  const [menuList, setMenuList] = useState([]);
  const { serverUrl } = useContext(CommonContext);

  function refreshList() {
    axios
      .get(`/bartender/recipe`, {
        headers: {
          'Access-Control-Allow-Origin' : '*'
        },
        
      })
      .then((res) => {
        console.log(res.data);
        setMenuList(res.data);
      })
      .catch((err) => console.log(err + " 에러났음"));
  }

  useEffect(() => {
    refreshList();
    if(menuList.length === 0) {
      console.log("i don't know")
    }
  }, []);


  const menu = menuList.map((item) => {
    return (
      <Carousel.Item key={item.id} className="caroitem" onClick={onClickRedirectPathHandler('/SelectCocktail/' + item.id)}>
        <img src={item.image} alt={item.name} className="cocktailimg"></img>
        <Carousel.Caption>
          <h1>{item.strDrink}</h1>
          <p>{item.strInstructions}</p>
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