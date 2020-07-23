import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { BrowserRouter as Router, Link } from 'react-router-dom';

// import NotFound from '../NotFound/';

// let selectedCocktail = e => {
//   this.setState({});
// };

export default () => (
  <Carousel>
    <div>
      <Link to="/SelectCocktail">
        <p className="cocktail">cocktail 1</p>
      </Link>
      <button>
        <img
          alt="cocktail 1 image"
          src="http://lorempixel.com/output/abstract-q-c-640-480-1.jpg"
        />
      </button>
    </div>

    <div>
      <Link to="/SelectCocktail">
        <p className="cocktail">cocktail 2</p>
      </Link>
      <button>
        <img
          alt="cocktail 2 image"
          src="http://lorempixel.com/output/abstract-q-c-640-480-2.jpg"
        />
      </button>
    </div>

    <div>
      <Link to="/SelectCocktail">
        <p className="cocktail">cocktail 3</p>
      </Link>
      <button>
        <img
          alt="cocktail 3 image"
          src="http://lorempixel.com/output/abstract-q-c-640-480-3.jpg"
        />
      </button>
    </div>
  </Carousel>
);
