import styled from "styled-components";

const Wrapper = styled.div`
  & .comment-form-footer {
    position: fixed;
    bottom: 0%;
    padding: 1.5% 2.5%;
    border-top: solid 0.5px #dddddd;
    width: 100%;
    height: 50px;
    background-color: white;
  }

  & .comment-form-avata {
    font-size: 35px;
  }

  & .comment-form-input {
    margin: 0 2.5%;
    border: none;
    width: 77.5%;
    word-wrap: break-word;
    /* height: 100%; */
  }

  & .comment-form-register {
    text-decoration: none;
    font-weight: 600;
    color: #88c4ff;
  }

  & .comment-form-register2 {
    text-decoration: none;
    font-weight: 600;
    color: #0080ff;
  }
`;
export default Wrapper;
