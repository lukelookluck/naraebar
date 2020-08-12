import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  font-family: 'IBMPlexSansKR-Text';

  & .titleGrid {
    margin-top: 120px;
  }

  & h1 {
    font-size: 80px;
    margin-bottom: 30px;
    font-weight: bold;
  }

  & h2 {
    font-size: 30px;
    margin-bottom: 30px;
  }

  & h3 {
    font-size: 40px;
    margin-top: 30px;
  }

  & .cocktailImg {
    width:500px;
    height:500px;
  }

  & .imgGrid {
    margin-top: 120px;
    padding-left: 50px;
  }

  & .textGrid {
    // margin-top: 60px;
    padding-right: 20px;
  }

  & .itemdiv {
    font-size: 25px;
  }
  
  & .igrGrid {
    margin-top: 40px;
  }

  & .btnGrid {
    margin-top: 100px;
  }

  & .btnSelect {
    background-color: rgb(76, 127, 188);
    text-decoration: none;
    border: none;
    color: white;
    font-family: 'IBMPlexSansKR-Text';
    font-size: 60px;
    height: 130px;
    width: 200px;
    margin-right: 30px;
  }

  & .btnSelect:hover {
    background-color: rgb(76, 127, 188);
  }

  & .btnCancel {
    background-color: rgb(200, 200, 200);
    text-decoration: none;
    border: none;
    color: black;
    font-size: 60px;
    font-family: 'IBMPlexSansKR-Text';
    height: 130px;
    width: 200px;
    margin-left: 30px;
  }

`;

export default Wrapper;
