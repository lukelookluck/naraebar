import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";

import Wrapper from "./style";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import InsertCommentOutlinedIcon from "@material-ui/icons/InsertCommentOutlined";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import CommentList from "../CommentList/";

export default function (props) {
  // console.log(props.list);
  let article = props.list.map((item, index) => {
    // console.log("key", index);
    // console.log("asd");

    const [isLikeit, setLikeIt] = useState(0);
    const [isSaveit, setSaveit] = useState(0);

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
      <div className="list-card" key={index}>
        <div className="list-user">
          <AccountCircleIcon />
          &nbsp;&nbsp;{item.user}
        </div>
        <div className="list-item">
          <img className="list-item-image" src="images/sample.jpg" alt="" />
          <div className="list-item-detail">
            <div className="detail-content">
              <p className="cname">" {item.name} "</p>
              {cardContent.split("\n").map((line, index2) => {
                return (
                  <span key={index2}>
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
          <div>
            {likeButton}&nbsp;&nbsp;
            <InsertCommentOutlinedIcon />
          </div>
          {saveButton}
        </div>

        <CommentList comments={item.comments} />
      </div>
    );
  });
  return (
    <Wrapper>
      <Grid className="list-box">{article}</Grid>
    </Wrapper>
  );
}
