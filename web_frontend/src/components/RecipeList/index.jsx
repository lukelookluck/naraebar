import React from "react";
import Grid from "@material-ui/core/Grid";

import Wrapper from "./style";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import dumpfile from "../../pages/Community/ArticleDump.json";

export default function () {
  const isLikeit = 0;

  let likeButton = null;
  if (isLikeit) {
    likeButton = <FavoriteIcon />;
  } else {
    likeButton = <FavoriteBorderIcon />;
  }

  const articleDump = dumpfile;
  const article = articleDump.map((item) => {
    return (
      <div className="list-card">
        <div className="list-user">
          <AccountCircleIcon /> {item.id}
        </div>
        <div className="list-item">
          <img className="list-item-image" src="images/sample.jpg" alt="" />
          <div className="list-item-detail">
            <span>{item.content}</span>
          </div>
        </div>
        <div className="like-button">
          {likeButton}
          <BookmarkBorderIcon />
        </div>
      </div>
    );
  });
  return (
    <Wrapper>
      <Grid className="list-box">{article}</Grid>
    </Wrapper>
  );
}
