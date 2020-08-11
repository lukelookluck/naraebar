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
    font-size: 40px;
    margin-bottom: 30px;
  }

  & h3 {
    font-size: 30px;
    margin-top: 30px;
  }

  & .cocktailImg {
    width:500px;
    height:500px;
  }

  & .imgGrid {
    margin-top: 160px;
  }

  & .textGrid {
    margin-top: 60px;
    padding-left: 60px;
  }

  & .itemdiv {
    font-size: 25px;
  }
  
  & .igrGrid {
    margin-top: 40px;
  }

  & .btnGrid {
    margin-top: 70px;
  }

  & .btnSelect {
    background-color: rgb(76, 127, 188);
    text-decoration: none;
    border: none;
    color: white;
    font-family: 'IBMPlexSansKR-Text';
    font-size: 35px;
    height: 70px;
    width: 140px;
    margin-right: 50px;
  }

  & .btnSelect:hover {
    background-color: rgb(76, 127, 188);
  }

  & .btnCancel {
    background-color: rgb(242, 242, 242);
    text-decoration: none;
    border: none;
    color: black;
    font-size: 35px;
    font-family: 'IBMPlexSansKR-Text';
    height: 70px;
    width: 140px;
    margin-left: 50px;
  }

`;

export default Wrapper;
