import styled from "styled-components";

const Wrapper = styled.div`
  & .comments-box {
    margin-top: 1%;
  }

  & .comment-single {
    margin-top: 1%;
  }

  & .comment-username {
    margin: 0 2%;
    font-weight: 600;
  }

  & .more-comment {
    margin-left: 2%;
    text-decoration: none;
    font-weight: 600;
    color: #727272;
  }
`;

export default Wrapper;
