import React, { useState } from "react";

import Wrapper from "./style";
import axios from "axios";

import FaceOutlinedIcon from "@material-ui/icons/FaceOutlined";

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
        <FaceOutlinedIcon className="comment-form-avata" />
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

// class CommentForm extends Component {
//   // num = 3; //모든 input 제어
//   state = { input1: "", input2: "" };
//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   }; //추가 명령을 수행할 함수
//   handleCreate = (data) => {
//     data.preventDefault();
//     // this.state.num++;
//     // const { input1, input2, list } = this.state;
//   };
//   render() {
//     const { handleChange, handleCreate } = this;
//     const { input1, input2 } = this.state;
//     return (
//       <Wrapper>
//         <div className="comment-form-footer">
//           <FaceOutlinedIcon className="comment-form-avata" />
//           <input
//             className="comment-form-input"
//             type="text"
//             name="comment-content"
//             placeholder="댓글 달기..."
//             // value={this.state.activeItem.description}
//             // onChange={this.handleChange}
//           />
//           <a href="#" className="comment-form-register">
//             등록
//           </a>
//         </div>
//       </Wrapper>
//     );
//   }
// }
// export default CommentForm;
