import React from 'react';
import { Carousel } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Layout from '../../layout';
import Wrapper from './style';
// import NotFound from '../NotFound/';

// let selectedCocktail = e => {
//   this.setState({});
// };

export default () => (
  <Layout>
    <Wrapper>
      <Carousel>
        <Carousel.Item>
          <img
            src={require('./images/margerita.jpg')}
            alt="cocktailImage1"
            className="cocktailImage"
          />
          <Carousel.Caption>
            <h3>Cocktail 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require('./images/screwdriver.jpg')}
            alt="cocktailImage2"
            className="cocktailImage"
          />
          <Carousel.Caption>
            <h3>Cocktail 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require('./images/xonthebeach.jpg')}
            alt="cocktailImage3"
            className="cocktailImage"
          />
          <Carousel.Caption>
            <h3>Cocktail 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Wrapper>
  </Layout>
);
