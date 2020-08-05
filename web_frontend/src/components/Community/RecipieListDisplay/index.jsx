import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";

import Wrapper from "./style";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function (props) {
  console.log("zzzzz", props.list);

  let article = props.list.map((item) => {
    const [isLikeit, setLikeIt] = useState(0);
    const [isSaveit, setSaveit] = useState(0);
    console.log("a?", props.list);

    let likeButton = null;
    if (isLikeit) {
      likeButton = <FavoriteIcon onClick={likeIt} />;
    } else {
      likeButton = <FavoriteBorderIcon onClick={likeIt} />;
    }

    function likeIt() {
      // alert("눌럿어?");
      setLikeIt(!isLikeit);
    }

    let saveButton = null;
    if (isSaveit) {
      saveButton = <BookmarkIcon onClick={saveIt} />;
    } else {
      saveButton = <BookmarkBorderIcon onClick={saveIt} />;
    }

    function saveIt() {
      setSaveit(!isSaveit);
    }

    let moreButton = (
      <a className="more-tag" href="#" onClick={moreContent}>
        더보기
      </a>
    );

    const [myHide, setmyHide] = useState(moreButton);

    const [cardContent, setCardContent] = useState(
      item.detail.substring(0, 50) + "..."
    );

    function moreContent(e) {
      setCardContent(item.detail + "\n\n" + item.ingredients);
      console.log(myHide);
      setmyHide(null);
      e.preventDefault();
    }

    return (
      <div key={item.id} className="list-card">
        <div className="list-user">
          <AccountCircleIcon />
          &nbsp;&nbsp;{item.user}
        </div>
        <div className="list-item">
          <img className="list-item-image" src="images/sample.jpg" alt="" />
          <div className="list-item-detail">
            <div className="detail-content">
              <p className="cname">" {item.name} "</p>
              {cardContent.split("\n").map((line) => {
                return (
                  <span>
                    {line}
                    <br></br>
                  </span>
                );
              })}
              {myHide}
            </div>
          </div>
        </div>
        <div className="like-button">
          {likeButton}
          {saveButton}
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
