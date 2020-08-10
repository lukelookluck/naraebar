import styled from "styled-components";

const Wrapper = styled.div`
  & .list-box {
    padding-left: 10%;
    padding-right: 10%;
  }

  & .list-card {
    margin-bottom: 20%;
    padding: 10%;
    border: solid 1px #9b9b9b;
    border-radius: 15px;
  }

  & .list-user {
    display: flex;
    justify-content: start;
    margin-left: 2%;
    padding-bottom: 4%;
    width: 100%;
    border-bottom: solid 1px #9b9b9b;
  }

  & .list-item {
    /* display: flex; */
    margin-bottom: 4%;
  }

  & .list-item-image {
    width: 100%;
    padding: 10% 10%;
    /* padding-bottom: 10%; */
    border-bottom: solid 1px #9b9b9b;
  }

  & .list-item-detail {
    // flex-direction: column;
    // display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  & .like-button {
    margin-left: 2%;
    margin-right: 2%;
    display: flex;
    justify-content: space-between;
  }

  & .detail-content {
    font-size: 1em;
    padding: 10% 0;
    width: 100%;
    border-bottom: solid 1px #9b9b9b;
  }

  & .more-tag {
    text-decoration: none;
    font-weight: 600;
    color: #727272;
  }

  & .cname {
    font-weight: 600;
    font-size: 1.3em;
  }

  & .comments-box {
    margin-top: 5%;
  }

  & .comment-username {
    margin: 0 2%;
    font-weight: 600;
  }
`;

export default Wrapper;
