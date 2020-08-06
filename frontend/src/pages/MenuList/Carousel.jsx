import React, {useState} from 'react';
import { Carousel } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Wrapper from './style';
import dumpfile from "./dump.json";
import { Grid } from "@material-ui/core";

export default function () {

  const menuDump = dumpfile;
  
  const menu = menuDump.map((item) => {
    return (
      <Carousel.Item key={item.id} className="caroitem">
        <img src={item.img} alt={item.name} className="cocktailimg">
        </img>
        <Carousel.Caption /* className="carotext" */ >
          <h1>{item.name}</h1>
          <p>{item.details}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }
  );
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


  // <Wrapper>
  //   <Carousel>
  //     <Carousel.Item>
  //       <img
  //         src={require('./images/margerita.jpg')}
  //         alt="cocktailImage1"
  //         className="cocktailImage"
  //       />
  //       <Carousel.Caption>
  //         <h3>Cocktail 1</h3>
  //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  //       </Carousel.Caption>
  //     </Carousel.Item>
  //     <Carousel.Item>
  //       <img
  //         src={require('./images/screwdriver.jpg')}
  //         alt="cocktailImage2"
  //         className="cocktailImage"
  //       />
  //       <Carousel.Caption>
  //         <h3>Cocktail 2</h3>
  //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  //       </Carousel.Caption>
  //     </Carousel.Item>
  //     <Carousel.Item>
  //       <img
  //         src={require('./images/xonthebeach.jpg')}
  //         alt="cocktailImage3"
  //         className="cocktailImage"
  //       />
  //       <Carousel.Caption>
  //         <h3>Cocktail 3</h3>
  //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  //       </Carousel.Caption>
  //     </Carousel.Item>
  //   </Carousel>
  // </Wrapper>

}