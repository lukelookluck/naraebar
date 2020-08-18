import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px 0 20px;
  text-align: center;
  box-sizing: border-box;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  font-family: 'IBMPlexSansKR-Text';

  * {
    word-break: keep-all;
  }
  & .recipe {
    padding: 10%;
  }

  & .listdiv {
    // float: left;
    display: inline-block;
    width: 50%;
  }

  & .deletebtn {
    float: right;
  }

  & .namediv {
    position: relative;
  }

  & .iconbtndiv {
    position: relative;
    left:10px;
    top: -38px;
  }

  & .sug {
    font-size: 30px;
    margin-top: 50px;
  }

  & .card-img-top {
    // width: 200px;
    // hegiht: 200px;
  }

  @media(min-width: 700px) {

    & .card {
      width: 1000px;
    }

    & .card-img-top {
      // width: 600px;
      // height: 500px;
    }
  }


`;

export default Wrapper;
