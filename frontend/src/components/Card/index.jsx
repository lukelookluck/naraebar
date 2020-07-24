import React from 'react';
import './style.css';
import Button from '../../components/Button';

// import mojito from '../../../public/images/cocktail/mojito2.png';

export default function CardBody() {
  return (
    <div className="card-body">
      <div className="card-text">
        <h1 className="card-title">모히토</h1>
        <h2 className="card-subtitle">쿠바</h2>
        <p className="card-description">
          Muddle mint leaves with sugar and lime juice. Add a splash of soda
          water and fill the glass with cracked ice. Pour the rum and top with
          soda water. Garnish and serve with straw.
        </p>
        <div>
          <ul>
            <li>
              <h4>Light rum</h4>
              2-3 oz
            </li>
            <li>
              <h4>Lime</h4>
              Juice of 1
            </li>
            <li>
              <h4>Sugar</h4>2 tsp
            </li>
            <li>
              <h4>Mint</h4>
              2-4
            </li>
            <li>
              <h4>Soda water</h4>
              half cup
            </li>
          </ul>
        </div>
        <div className="card-button">
          <Button />
        </div>
      </div>
      <div>
        <img className="my-img" src="images/cocktail/mojito2.png" alt="" />
      </div>
    </div>
  );
}
