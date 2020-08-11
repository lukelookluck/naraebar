import React, { useState, useEffect, Component } from "react";
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

class CommentDisplay extends Component {
  state = {
    listComment: [],
    commentInput: {
      content: "",
      article: this.props.location.state.article,
      parent: null,
      user: 2,
    },
  };

  handleChangeCommentInput = (e) => {
    // console.log(e.content);
    this.setState({
      commentInput: {
        ...this.state.commentInput,
        content: e.content,
      },
    });
    console.log("commentinput", this.state.commentInput);
  };

  componentDidMount() {
    this.refreshList();
  }

  goBack = () => {
    this.props.history.goBack();
  };

  refreshList = () => {
    axios
      .get("http://192.168.0.4:8100/community/comment/", {
        // headers: {
        //   Authorization: `JWT ${localStorage.getItem("token")}`,
        // },
        params: {
          article: this.props.location.state.article,
        },
      })
      .then((res) => {
        this.setState({ listComment: res.data });
        console.log(this.state.listComment);
      })
      .catch((err) => console.log(err));
  };

  handleSubmit = (data) => {
    axios
      .post("http://192.168.0.4:8100/community/comment/", data, {
        // headers: {
        //     Authorization: `JWT ${localStorage.getItem("token")}`,
        //   },
      })
      .then((res) => {
        console.log(res.data);
        this.state.commentInput.content = "";
        this.refreshList();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  likeSubmit = (comment) => {
    console.log(comment);
    axios
      .post(
        `http://192.168.0.4:8100/community/comment/${comment.id}/`,
        { user: comment.user }, // 현재 유저 정보 넣기
        {
          // headers: {
          //   dd
          // }
        }
      )
      .then((res) => {
        console.log(res.data);

        this.refreshList();
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Wrapper>
        <Grid>
          <div className="comment-list-header">
            <ArrowBackOutlinedIcon
              className="comment-list-header-arrow"
              fontSize="large"
              onClick={this.goBack}
            />
            <span className="comment-list-header-title">댓글</span>
          </div>
          <div className="comment-list-box">
            <CommentList
              comments={this.state.listComment}
              likeSubmit={this.likeSubmit}
            />
          </div>
          <CommentForm
            commentInput={this.state.commentInput}
            // setCommentInput={this.state.setCommentInput}
            setCommentInput={this.handleChangeCommentInput}
            handleSubmit={this.handleSubmit} // 부모에서 자식으로 부모 이벤트 넘겨줄 떄 자식에선 'props.부모이벤트' 로 사용
            // this.setState({ listComment: res.data });
          />
        </Grid>
      </Wrapper>
    );
  }
}

export default CommentDisplay;
