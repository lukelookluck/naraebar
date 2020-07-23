import React from 'react';
import Layout from '../../layout/'
import './style.css'

const MakingCocktail = () => {
  return (
    <Layout>
        <div className="container">
            <div className="bartender">
                <img src="images/bartender1.gif"></img>
            </div>
            <h1>Making a Cocktail<br></br>Please Waiting...</h1>
        </div>
        {
            (function(){
                
            })
        }
    </Layout>
  );
};

export default MakingCocktail;
