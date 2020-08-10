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
    margin-top: 80px;
  }

  & .btnSelect {
    background-color: rgb(76, 127, 188);
    text-decoration: none;
    border: none;
    color: white;
    font-family: 'IBMPlexSansKR-Text';
    font-size: 25px;
    height: 60px;
    width: 120px;
    margin-right: 20px;
  }

  & .btnSelect:hover {
    background-color: rgb(76, 127, 188);
  }

  & .btnCancel {
    background-color: rgb(242, 242, 242);
    text-decoration: none;
    border: none;
    color: black;
    font-size: 25px;
    font-family: 'IBMPlexSansKR-Text';
    height: 60px;
    width: 120px;
    margin-left: 20px;
  }

`;

export default Wrapper;
