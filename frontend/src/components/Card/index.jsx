import React from 'react';
import Wrapper from './style';
import Button from '../../components/Button';

export default function CardBody(props) {

  return (
    <Wrapper>
      <div className="card-body">
        <div className="card-text">
          <h1 className="card-title"> {myCockTail.name}</h1>
          <h2 className="card-subtitle"> {myCockTail.strCategory}</h2>
          <p className="card-description">
            <p>{myCockTail.strInstructions}</p>
          </p>
          <div>
            <ul>
              <li>
                <h4>{myCockTail.strIngredient1}</h4>
                <p>{myCockTail.strMeasure1}</p>
              </li>
              <li>
                <h4>{myCockTail.strIngredient2}</h4>
                <p>{myCockTail.strMeasure2}</p>
              </li>
              <li>
                <h4>{myCockTail.strIngredient3}</h4>
                <p>{myCockTail.strMeasure3}</p>
              </li>
              <li>
                <h4>{myCockTail.strIngredient4}</h4>
                <p>{myCockTail.strMeasure4}</p>
              </li>
              <li>
                <h4>{myCockTail.strIngredient5}</h4>
                <p>{myCockTail.strMeasure5}</p>
              </li>
            </ul>
          </div>
          <div className="card-button">
            <Button />
          </div>
        </div>
        <div>
          <img
            className="my-img"
            src={myCockTail.strDrinkThumb}
            alt={myCockTail.strDrink}
          />
        </div>
      </div>
    </Wrapper>
  );
}
