import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Wrapper from "./style";

import axios from "axios";

import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import CommentForm from "../../components/Community/Comment/CommentForm/";
import ReplyList from "../../components/Community/ReplyList/";

const CommentDisplay = (props) => {
  useEffect(() => {
    refreshList();
  }, []);

  const goBack = () => {
    props.history.goBack();
  };
  const [listComment, setListComment] = useState([]);

  const [commentInput, setCommentInput] = useState({
    content: "",
    article: props.location.state.article,
    parent: null,
    user: 2,
  });

  function refreshList() {
    axios
      .get("http://192.168.0.4:8100/community/comment/", {
        // headers: {
        //   Authorization: `JWT ${localStorage.getItem("token")}`,
        // },
        params: {
          article: props.location.state.article,
        },
      })
      .then((res) => {
        setListComment(res.data);
      })
      .catch((err) => console.log(err));
  }

  function handleSubmit(data) {
    axios
      .post("http://192.168.0.4:8100/community/comment/", data, {
        // headers: {
        //     Authorization: `JWT ${localStorage.getItem("token")}`,
        //   },
      })
      .then((res) => {
        refreshList();
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
          {listComment.map((comment, idx) => {
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
        <CommentForm
          commentInput={commentInput}
          setCommentInput={setCommentInput}
          handleSubmit={handleSubmit} // 부모에서 자식으로 부모 이벤트 넘겨줄 떄 자식에선 'props.부모이벤트' 로 사용
        />
      </Grid>
    </Wrapper>
  );
};

export default CommentDisplay;
