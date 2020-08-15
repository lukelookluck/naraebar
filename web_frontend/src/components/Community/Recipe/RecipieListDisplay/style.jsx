import styled from "styled-components";

const Wrapper = styled.div`
  & .list-box {
    padding-left: 0%;
    padding-right: 0%;
  }

  & .list-card {
    margin-bottom: 20%;
    padding: 10%;
    border: solid 1px #9b9b9b;
    border-radius: 15px;
  }

  & .list-user {
    display: flex;
    justify-content: space-between;
    padding-left: 2%;
    margin: 0;
    padding-bottom: 15px;
    width: 100%;
    border-bottom: solid 1px #9b9b9b;
  }

  & .list-item {
    /* display: flex; */
    margin-bottom: 4%;
  }

  & .list-item-imageBox {
    width: 63.75vw;
    height: 63.75vw;
    padding: 10% 5%;
    overflow: hidden;
    /* padding-bottom: 10%; */
    border-bottom: solid 1px #9b9b9b;
  }

  & .list-item-image {
    width: 100%;
    height: 100%;
    padding: 0;
    /* padding-bottom: 10%; */
    /* border-bottom: solid 1px #9b9b9b; */
  }

  & .list-item-detail {
    /* flex-direction: column;
    display: flex; */
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

  & .more-comment {
    color: black;
  }

  & .countLikeIt1 {
    font-weight: 600;
    margin-left: 8px;
  }

  & .to-update-button {
    padding: 50px;
  }

  & .ingredient-title {
    font-size: 15px;
    font-weight: 700;
    text-align: left;
    margin: 2vw 0;
  }

  & .ingredient-box {
    display: flex;
    justify-content: space-between;
    margin: 2vw 2vw;
    border-bottom: 1px dotted #9b9b9b;
  }
`;

export default Wrapper;
