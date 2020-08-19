import React, { useState, useEffect, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Wrapper from "./style";

import axios from "axios";

import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import ClearIcon from "@material-ui/icons/Clear";

import CommentList from "../../components/Community/Comment/CommentList/";
import CommentForm from "../../components/Community/Comment/CommentForm/";
import { CommonContext } from "../../context/CommonContext";

export default function (props) {
  const { serverUrl, user } = useContext(CommonContext);
  const [listComment, setListComment] = useState([]);
  const [commentInput, setCommentInput] = useState({
    content: "",
    article: props.location.state.article,
    parent: null,
    user: user.user.id,
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
        { user: user.user.id }, // 현재 유저 정보 넣기
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

  function doReply(reply) {
    setCommentInput({
      ...commentInput,
      content: "@" + reply.username + " ",
      parent: reply.id,
    });
    console.log(commentInput);
  }

  const [clicked, setClicked] = useState(1);
  const [myClicked, setMyClicked] = useState(true);
  let [a, setA] = useState("");

  let [deleteBtn, setDeleteBtn] = useState(null);
  // deleteBtn = (
  //   <DeleteIcon className="comment-list-header-delete-click" fontSize="large" />
  // );

  function clickComment(e) {
    if (a) {
      // console.log("a있다");
      // console.log("a", a);
      // console.log("myClicked", myClicked);

      if (myClicked) {
        // console.log("myClicked있다");
        e.target.closest(".comment-single").style.background = "#e0f2ff";
        // props.setMyClicked1(!props.myClicked1);
      } else {
        // console.log("myClicked없다");
        a.style.background = "";
      }
    } else {
      // console.log("a없다");
      // console.log("a", a);
      if (myClicked) {
        // console.log("myClicked있다");
        e.target.closest(".comment-single").style.background = "#e0f2ff";
        // props.setMyClicked1(!props.myClicked1);
      } else {
        // console.log("myClicked없다");
        e.target.closest(".comment-single").style.background = "";
      }
    }
    // console.log("a", a);
    if (a !== e.target.closest(".comment-single")) {
      a = "";
    }
    // e.target.style
    // console.log("끼룩..");
    setMyClicked(!myClicked);

    setClicked(!clicked);
  }

  let commentHeader = null;
  if (clicked) {
    commentHeader = (
      <div className="comment-list-header">
        <ArrowBackOutlinedIcon
          className="comment-list-header-arrow"
          fontSize="large"
          onClick={goBack}
        />
        <span className="comment-list-header-title">댓글</span>
      </div>
    );
  } else {
    commentHeader = (
      <div className="comment-list-header-clicked">
        <div className="comment-list-header-clicked-1">
          <div>
            <ClearIcon
              className="comment-list-header-arrow-click"
              fontSize="large"
              onClick={(e) => clickComment(e)}
            />
          </div>
          <span className="comment-list-header-title-click">선택됨</span>
        </div>
        {deleteBtn}
      </div>
    );
  }

  return (
    <Wrapper>
      <Grid>
        {commentHeader}
        <div className="comment-list-box">
          <CommentList
            comments={listComment}
            likeSubmit={likeSubmit}
            doReply={doReply}
            clickComment={clickComment}
            clicked={clicked}
            setA={setA}
            a={a}
            deleteBtn={deleteBtn}
            setDeleteBtn={setDeleteBtn}
          />
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
