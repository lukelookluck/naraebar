import styled from "styled-components";

const Wrapper = styled.div`
  font-family: "IBMPlexSansKR-Text";

  & .comment-list-header {
    position: fixed;
    top: 0;
    width: 100%;
    border-bottom: solid 0.5px #dddddd;
    padding: 10px 5px;
    display: flex;
    flex-direction: row;
    background-color: #fcfcfc;
  }

  & .comment-list-header-clicked {
    position: fixed;
    top: 0;
    width: 100%;
    border-bottom: solid 0.5px #dddddd;
    padding: 10px 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #4477b5;
  }

  & .comment-list-header-clicked-1 {
    height: 45px;
    display: flex;
  }

  & .comment-list-header-arrow {
    font-size: 45px;
  }

  & .comment-list-header-arrow-click {
    font-size: 45px;
    color: #ffffff;
  }

  & .comment-list-header-delete-click {
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
    margin-top: 65px;
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
