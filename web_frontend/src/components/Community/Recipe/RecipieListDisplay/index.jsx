import React, { useState, useContext } from "react";
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
import MenuModal from "../MenuModal/";

import { CommonContext } from "../../../../context/CommonContext";

export default function (props) {
  const { serverUrl, user } = useContext(CommonContext);

  // console.log(props.list);
  let article = props.list.map((item, index) => {
    // console.log("key", index);
    // console.log("item", item);

    // const [countLikeIt, setCountLikeIt] = useState(item.LIKE.length);
    const [isSaveit, setSaveit] = useState(0);

    let likeButton = null;
    let countLikeIt1 = null;
    if (item.LIKE.includes(user.user.id)) {
      // 현재 유저가 item.LIKE에 있으면 1 없으면 0
      console.log("있다면");
      likeButton = <FavoriteIcon onClick={likeIt} color="error" key={index} />;
      countLikeIt1 = (
        <span className="countLikeIt1">좋아요 {item.LIKE.length}개</span>
      );
    } else {
      console.log("없다면");

      likeButton = <FavoriteBorderIcon onClick={likeIt} key={index} />;
      countLikeIt1 = (
        <span className="countLikeIt1">좋아요 {item.LIKE.length}개</span>
      );
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
      saveButton = <BookmarkIcon onClick={() => props.saveSubmit(item)} />;
    } else {
      saveButton = (
        <BookmarkBorderIcon onClick={() => props.saveSubmit(item)} />
      );
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
    const [ingredients, setIngredients] = useState("");

    function moreContent(e) {
      setCardContent(
        <div>
          <div>{item.detail}</div>
          <div className="ingredient-title">[재료]</div>

          {item.ingredient1.length != 0 ? (
            <div className="ingredient-box">
              <span>{item.ingredient1}</span>
              <span>{item.measure1} ml</span>
            </div>
          ) : (
            <div></div>
          )}
          {item.ingredient2.length != 0 ? (
            <div className="ingredient-box">
              <span>{item.ingredient2}</span>
              <span>{item.measure2} ml</span>
            </div>
          ) : (
            <div></div>
          )}
          {item.ingredient3.length != 0 ? (
            <div className="ingredient-box">
              <span>{item.ingredient3}</span>
              <span>{item.measure3} ml</span>
            </div>
          ) : (
            <div></div>
          )}
          {item.ingredient4.length != 0 ? (
            <div className="ingredient-box">
              <span>{item.ingredient4}</span>
              <span>{item.measure4} ml</span>
            </div>
          ) : (
            <div></div>
          )}
          {item.ingredient5.length != 0 ? (
            <div className="ingredient-box">
              <span>{item.ingredient5}</span>
              <span>{item.measure5} ml</span>
            </div>
          ) : (
            <div></div>
          )}
          {item.ingredient6.length != 0 ? (
            <div className="ingredient-box">
              <span>{item.ingredient6}</span>
              <span>{item.measure6} ml</span>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      );
      setIngredients("");
      console.log(myHide);
      setmyHide(null);
      e.preventDefault();
    }

    return (
      <div className="list-card" key={index}>
        <div className="list-user">
          <div>
            <AccountCircleIcon />
            &nbsp;&nbsp;{item.username}
          </div>
          <div>
            {item.user}
            {user.user.id}
            {}
            <MenuModal item={item} DeleteArticle={props.DeleteArticle} />
          </div>
        </div>
        <div className="list-item">
          <div className="list-item-imageBox">
            {/* <img className="list-item-image" src="images/sample.jpg" alt="" /> */}
            <img className="list-item-image" src={item.image} alt="" />
          </div>
          <div className="list-item-detail">
            <div className="detail-content">
              <p className="cname">" {item.title} "</p>
              {cardContent}
              {/* {cardContent.split("\n").map((line, index) => {
                return (
                  <span key={index}>
                    {line}
                    <br></br>
                  </span>
                );
              })} */}
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
