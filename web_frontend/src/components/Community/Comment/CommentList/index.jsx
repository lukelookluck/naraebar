import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Wrapper from "./style";

import axios from "axios";

import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import ReplyList from "../../../Community/ReplyList/";

export default function (props) {
  let comments = props.comments.map((comment, idx) => {
    let likeButton = null;
    let countLikeIt1 = null;
    if (comment.LIKE.length) {
      likeButton = <FavoriteIcon onClick={likeIt} color="error" key={idx} />;
      countLikeIt1 = (
        <span className="comment-likeIt-count">
          좋아요 {comment.LIKE.length}개
        </span>
      );
    } else {
      likeButton = <FavoriteBorderIcon onClick={likeIt} key={idx} />;
    }

    function likeIt() {
      // alert("눌럿어?");
      props.likeSubmit(comment);
    }

    function getTime(myTime) {
      let theTime = null;

      const now = new Date();
      const old = new Date(myTime);
      const gap = now - old;
      const sec_gap = Math.floor(gap / 1000);
      const min_gap = Math.floor(sec_gap / 60);
      const hour_gap = Math.floor(min_gap / 60);
      const day_gap = Math.floor(hour_gap / 24);
      const mon_gap = Math.floor(day_gap / 12);

      // console.log(sec_gap, min_gap, hour_gap, day_gap, mon_gap);
      // console.log(old, now);
      if (mon_gap >= 1) {
        theTime = (
          <span className="comment-createdTime" key={idx}>
            {mon_gap}월 전
          </span>
        );
      } else {
        if (day_gap >= 1) {
          theTime = (
            <span className="comment-createdTime" key={idx}>
              {day_gap}일 전
            </span>
          );
        } else {
          if (hour_gap >= 1) {
            theTime = (
              <span className="comment-createdTime" key={idx}>
                {hour_gap}시간 전
              </span>
            );
          } else {
            if (min_gap >= 1) {
              theTime = (
                <span className="comment-createdTime" key={idx}>
                  {min_gap}분 전
                </span>
              );
            } else {
              if (sec_gap >= 1) {
                theTime = (
                  <span className="comment-createdTime" key={idx}>
                    {sec_gap}초 전
                  </span>
                );
              } else {
                theTime = (
                  <span className="comment-createdTime" key={idx}>
                    등록 중
                  </span>
                );
              }
            }
          }
        }
      }
      return <div>{theTime}</div>;
    }

    return (
      <div key={idx}>
        <div className="comment-single">
          <AccountCircleTwoToneIcon
            className="comment-avata"
            fontSize="large"
          />
          <div className="comment-single-left">
            <div className="comment-single-left-1">
              <div className="comment-username">
                {comment.username}
                <div className="comment-content">{comment.content}</div>
              </div>
            </div>

            <div className="comment-single-left-2">
              {getTime(comment.created_at)}
              {countLikeIt1}
              <span className="comment-reply">답글 달기</span>
            </div>
          </div>
          <div className="comment-likeIt">{likeButton}</div>
        </div>
        <div>
          <ReplyList replys={comment.replys} />
        </div>
      </div>
    );
  });

  return <Wrapper>{comments}</Wrapper>;
}
