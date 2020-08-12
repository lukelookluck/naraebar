import React, { useState, useEffect, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Wrapper from "./style";

import axios from "axios";

import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import CommentList from "../../components/Community/Comment/CommentList/";
import CommentForm from "../../components/Community/Comment/CommentForm/";
import ReplyList from "../../components/Community/ReplyList/";
import { CommonContext } from "../../context/CommonContext";

export default function (props) {
  const { serverUrl, user } = useContext(CommonContext);
  const [listComment, setListComment] = useState([]);
  const [commentInput, setCommentInput] = useState({
    content: "",
    article: props.location.state.article,
    parent: null,
    user: 1,
  });

  function handleChangeCommentInput(e) {
    // console.log(e.content);
    setCommentInput({
      ...commentInput,
      content: e.content,
    });
    // console.log("commentinput", commentInput);
  }

  useEffect(() => {
    refreshList();
  }, []);

  function goBack() {
    props.history.goBack();
  }

  function refreshList() {
    axios
      .get(`${serverUrl}/community/comment/`, {
        headers: {
          Authorization: `JWT ${user.token}`,
        },
        params: {
          article: props.location.state.article,
        },
      })
      .then((res) => {
        setListComment(res.data);
        console.log(listComment);
      })
      .catch((err) => console.log(err));
  }

  function handleSubmit(data) {
    axios
      .post(`${serverUrl}/community/comment/`, data, {
        headers: {
          Authorization: `JWT ${user.token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        commentInput.content = "";
        refreshList();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function likeSubmit(comment) {
    console.log(comment);
    axios
      .post(
        `${serverUrl}/community/comment/${comment.id}/`,
        { user: comment.user }, // 현재 유저 정보 넣기
        {
          headers: {
            Authorization: `JWT ${user.token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);

        refreshList();
      })
      .catch((err) => console.log(err));
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
          <CommentList comments={listComment} likeSubmit={likeSubmit} />
        </div>
        <CommentForm
          commentInput={commentInput}
          // setCommentInput={this.state.setCommentInput}
          setCommentInput={handleChangeCommentInput}
          handleSubmit={handleSubmit} // 부모에서 자식으로 부모 이벤트 넘겨줄 떄 자식에선 'props.부모이벤트' 로 사용
          // this.setState({ listComment: res.data });
        />
      </Grid>
    </Wrapper>
  );
}
