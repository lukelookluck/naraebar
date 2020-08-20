import React, { useState } from "react";

import Wrapper from "./style";
import axios from "axios";

import FaceOutlinedIcon from "@material-ui/icons/FaceOutlined";
import FaceIcon from "@material-ui/icons/Face";

export default function (props) {
  // console.log("props", props);
  // function handleSubmit(data) {
  //   console.log(data);
  // }
  let a = null;
  if (props.commentInput.content) {
    a = (
      <span
        className="comment-form-register2"
        onClick={() => props.handleSubmit(props.commentInput)}
      >
        등록
      </span>
    );
  } else {
    a = (
      <span
        className="comment-form-register"
        onClick={() => props.handleSubmit(props.commentInput)}
      >
        등록
      </span>
    );
  }

  return (
    <Wrapper>
      <div className="comment-form-footer">
        {props.commentInput.content ? (
          <FaceIcon className="comment-form-avata2" />
        ) : (
          <FaceOutlinedIcon className="comment-form-avata" />
        )}
        <input
          className="comment-form-input"
          type="text"
          name="comment-content"
          placeholder="댓글 달기..."
          value={props.commentInput.content}
          onChange={({ target: { value } }) =>
            props.setCommentInput({ ...props.commentInput, content: value })
          }
        />
        {a}
      </div>
    </Wrapper>
  );
}
