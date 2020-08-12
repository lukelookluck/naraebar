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


  const [articleList, setArticleList] = useState([]);
  const { serverUrl } = useContext(CommonContext);

  function refreshList() {
    axios
      .get(`${serverUrl}/bartender/recipe`, {
        // headers: {
        //   Authorization: `JWT ${user.token}`,
        // },
      })
      .then((res) => {
        console.log(res.data);
        setArticleList(res.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    refreshList();
  }, []);


  const menu = articleList.map((item) => {
    return (
      <Carousel.Item key={item.id} className="caroitem" onClick={onClickRedirectPathHandler('/SelectCocktail/' + item.id)}>
        <img src={item.image} alt={item.name} className="cocktailimg"></img>
        <Carousel.Caption>
          <h1>{item.name}</h1>
          <p>{item.detail}</p>
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