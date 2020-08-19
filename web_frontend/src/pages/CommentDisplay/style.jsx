import styled from "styled-components";

const Wrapper = styled.div`
  & .comment-list-header {
    border-bottom: solid 0.5px #dddddd;
    padding: 10px 5px;
    display: flex;
    flex-direction: row;
    background-color: #fcfcfc;
  }

  & .comment-list-header-clicked {
    border-bottom: solid 0.5px #dddddd;
    padding: 10px 5px;
    display: flex;
    flex-direction: row;
    background-color: #0080ff;
  }

  & .comment-list-header-arrow {
    font-size: 45px;
  }

  & .comment-list-header-arrow-click {
    font-size: 45px;
    color: #ffffff;
  }

  & .comment-list-header-title {
    margin-left: 15px;
    font-size: 30px;
  }

  & .comment-list-header-title-click {
    color: #ffffff;
    margin-left: 15px;
    font-size: 30px;
  }

  & .comment-list-box {
    /* margin: 10px 5px; */
    margin-bottom: 70px;
  }

  & .comment-single {
    margin: 11px 0;
    display: flex;
    justify-content: space-between;
  }

  & .comment-single-left {
    width: 100%;
    /* margin: auto; */
    /* display: flex; */
  }

  & .comment-single-left-1 {
    /* width: auto; */
    /* display: inline; */
  }

  & .comment-single-left-2 {
    /* width: auto; */
    height: 13px;
  }

  & .comment-avata {
    font-size: 40px;
  }

  & .comment-username {
    display: flex;
    font-weight: 900;
    margin-left: 3.3px;
  }

  & .comment-content {
    font-weight: 400;
    font-size: 14px;
    margin-left: 3.3px;
  }

  & .comment-likeIt {
    margin: auto;
  }

  & .comment-createdTime {
    font-size: 10px;
    margin-left: 5.5px;
    margin-right: 20px;
    float: left;
  }

  & .comment-likeIt-count {
    font-size: 1vh;
  }
`;

export default Wrapper;
