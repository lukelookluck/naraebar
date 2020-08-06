import styled from "styled-components";

const Wrapper = styled.div`
  & .comment-list-header {
    border-bottom: solid 1px black;
    padding: 2.5% 1%;
    display: flex;
    flex-direction: row;
  }

  & .comment-list-header-arrow {
    font-size: 45px;
  }

  & .comment-list-header-title {
    margin-left: 3%;
    font-size: 30px;
  }

  & .comment-list-box {
    margin: 5% 2.5%;
  }

  & .comment-single {
    margin: 2.5% 0;
    display: flex;
    justify-content: space-between;
  }

  & .comment-single-left {
    width: 100%;
    margin: auto;
    /* display: flex; */
  }

  & .comment-single-left-1 {
    /* width: auto; */
    /* display: inline; */
  }

  & .comment-single-left-2 {
    /* width: auto; */
    height: 2vh;
  }

  & .comment-avata {
    font-size: 7.5vh;
  }

  & .comment-username {
    font-weight: 900;
    margin: 0 1%;
    float: left;
  }

  & .comment-content {
    /* float: left; */
    /* width: 100%; */
  }

  & .comment-likeIt {
    margin: auto;
  }

  & .comment-createdTime {
    font-size: 1vh;
    margin-left: 1%;
    margin-right: 5%;
    float: left;
  }

  & .comment-likeIt-count {
    font-size: 1vh;
  }
`;

export default Wrapper;
