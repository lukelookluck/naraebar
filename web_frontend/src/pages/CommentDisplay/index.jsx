import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Wrapper from "./style";

import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import CommentForm from "../../components/Community/Comment/CommentForm/";
import ReplyList from "../../components/Community/ReplyList/";

const CommentDisplay = (props) => {
  console.log(props.location.state);
  const goBack = () => {
    props.history.goBack();
  };

  // 댓글 작성 중일때만
  // useEffect(() => {
  //   console.log(history);
  //   const unblock = history.block(
  //     "작성하던 내용이 없어집니다. 정말 떠나실건가요?"
  //   );
  //   return () => {
  //     unblock();
  //   };
  // }, [history]);

  return (
    <Wrapper>
      <Grid>
        <div className="comment-list-header">
          <ArrowBackOutlinedIcon
            className="comment-list-header-arrow"
            fontSize="large"
            onClick={goBack}
          />
          <span className="comment-list-header-title">댓글</span>
        </div>
        <div className="comment-list-box">
          {props.location.state.comments.map((comment, idx) => {
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
                      <div className="comment-createdTime">작성시간</div>
                      <div className="comment-likeIt-count">좋아요 개수</div>
                    </div>
                  </div>
                  <div className="comment-likeIt">
                    <FavoriteBorderIcon />
                  </div>
                </div>
                <div>
                  <ReplyList replys={comment.replys} />
                </div>
              </div>
            );
          })}
        </div>
        <CommentForm />
      </Grid>
    </Wrapper>
  );
};

export default CommentDisplay;
