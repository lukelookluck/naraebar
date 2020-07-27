import React from 'react'
import './style.css'

import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


export default function() {
  const isLikeit = 0
  let likeButton = null;
  if (isLikeit) {
    likeButton = <FavoriteIcon />
  }
  else {
    likeButton = <FavoriteBorderIcon />
  }
  return (
    <div className="list-box">
      <div className="list-item">
        <img className="list-item-image" src="images/sample.jpg" alt=""/>
        <div className="list-item-detail">
          <h1>레시피다~</h1>
          <div className="like-button">
            갯수: {likeButton}
          </div>
        </div>
      </div>

    </div>
  )
}