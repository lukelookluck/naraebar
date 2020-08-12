import React, { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import Wrapper from "./style";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import InsertCommentOutlinedIcon from "@material-ui/icons/InsertCommentOutlined";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import CommentList from "../../Comment/ArticleUnderCommentList";

export default function (props) {
  // console.log(props.list);
  let article = props.list.map((item, index) => {
    // console.log("key", index);
    // console.log("item", item);

    // const [countLikeIt, setCountLikeIt] = useState(item.LIKE.length);
    const [isSaveit, setSaveit] = useState(0);

    let likeButton = null;
    let countLikeIt1 = null;
    if (item.LIKE.length) {
      // 현재 유저가 item.LIKE에 있으면 1 없으면 0
      likeButton = <FavoriteIcon onClick={likeIt} color="error" key={index} />;
      countLikeIt1 = (
        <span className="countLikeIt1">좋아요 {item.LIKE.length}개</span>
      );
    } else {
      likeButton = <FavoriteBorderIcon onClick={likeIt} key={index} />;
    }

    function likeIt() {
      // alert("눌럿어?");
      props.likeSubmit(item);
      // setLikeIt(!isLikeit);
      // if (item.LIKE.length) {
      //   // 현재 유저가 item.LIKE에 있으면 1 없으면 0
      //   setCountLikeIt(countLikeIt - 1);
      // } else {
      //   setCountLikeIt(countLikeIt + 1);
      // }
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
          &nbsp;&nbsp;{item.username}
          <span>
            <Link
              className="more-comment"
              to={{
                pathname: "/Community/Create",
                state: {
                  article: item,
                },
              }}
            >
              <button>수정</button>
            </Link>
          </span>
          <span>
            <button onClick={() => props.DeleteArticle(item)}>삭제</button>
          </span>
        </div>
        <div className="list-item">
          <img className="list-item-image" src="images/sample.jpg" alt="" />
          <div className="list-item-detail">
            <div className="detail-content">
              <p className="cname">" {item.title} "</p>
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
            {likeButton}
            {/* {countLikeIt} */}
            &nbsp;&nbsp;&nbsp;
            <Link
              className="more-comment"
              to={{
                pathname: "/Community/Comment",
                state: {
                  comments: item.comments,
                  article: item.id,
                },
              }}
            >
              <InsertCommentOutlinedIcon />
            </Link>
          </div>
          {saveButton}
        </div>
        <hr />
        {countLikeIt1}
        <CommentList comments={item.comments} article={item} />
      </div>
    );
  });
  return (
    <Wrapper>
      <Grid className="list-box">{article}</Grid>
    </Wrapper>
  );
}
