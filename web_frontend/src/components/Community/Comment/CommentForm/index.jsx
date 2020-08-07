import React, { Component } from "react";

import Wrapper from "./style";

import FaceOutlinedIcon from "@material-ui/icons/FaceOutlined";

class CommentForm extends Component {
  // num = 3; //모든 input 제어
  state = { input1: "", input2: "" };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }; //추가 명령을 수행할 함수
  handleCreate = (data) => {
    data.preventDefault();
    // this.state.num++;
    // const { input1, input2, list } = this.state;
  };
  render() {
    const { handleChange, handleCreate } = this;
    const { input1, input2 } = this.state;
    return (
      <Wrapper>
        <div className="comment-form-footer">
          <FaceOutlinedIcon className="comment-form-avata" />
          <input
            className="comment-form-input"
            type="text"
            name="comment-content"
            placeholder="댓글 달기..."
            // value={this.state.activeItem.description}
            // onChange={this.handleChange}
          />
          <a href="#" className="comment-form-register">
            등록
          </a>
        </div>
      </Wrapper>
    );
  }
}
export default CommentForm;
