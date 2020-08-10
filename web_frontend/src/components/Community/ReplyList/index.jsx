import React, { useState, Component } from "react";
import { Link } from "react-router-dom";

import Wrapper from "./style";

import Grid from "@material-ui/core/Grid";

import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

export default function (props) {
  const [myIndex, setMyIndex] = useState(2);

  function moreComment() {
    setMyIndex(myIndex + 2);
    console.log(myIndex);
  }

  const [showReplysBool, setshowReplysBool] = useState(false);
  let showReplys = null;
  if (!showReplysBool) {
    console.log("폴스!!");
    if (myIndex < props.replys.length && props.replys.length > 2) {
      showReplys = (
        <span className="more-reply" onClick={moreComment}>
          이전 답글 {props.replys.length - myIndex}개 보기
        </span>
      );
    }
    if (props.replys.length > 2 && myIndex >= props.replys.length) {
      console.log("숨기기");
      showReplys = (
        <span className="more-reply" onClick={switcher}>
          답글 숨기기
        </span>
      );
    }
  } else {
    console.log("트루");
    showReplys = (
      <span className="more-reply" onClick={switcher}>
        답글 {props.replys.length}개 보기
      </span>
    );
  }

  function switcher() {
    setshowReplysBool(!showReplysBool);
    console.log(showReplysBool);
  }

  return (
    <Wrapper>
      <Grid className="replys-box">
        {/* {props.replys.length} {myIndex} */}
        {showReplys}
        {props.replys.reverse().map((reply, idx) => {
          if (showReplysBool === false && idx < myIndex) {
            return (
              <div className="reply-single" key={idx}>
                <AccountCircleTwoToneIcon
                  className="reply-avata"
                  fontSize="large"
                />
                <div className="reply-single-left">
                  <div className="reply-single-left-1">
                    <div className="reply-username">
                      {reply.username}
                      <div className="reply-content">{reply.content}</div>
                    </div>
                  </div>
                  <div className="reply-single-left-2">
                    <div className="reply-createdTime">작성시간</div>
                    <div className="reply-likeIt-count">좋아요 개수</div>
                  </div>
                </div>
                <div className="reply-likeIt">
                  <FavoriteBorderIcon />
                </div>
              </div>
            );
          }
        })}
      </Grid>
    </Wrapper>
  );
}
