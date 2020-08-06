import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  font-family: 'IBMPlexSansKR-Text';

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
    margin-top: 100px;
  }

  & .textGrid {
    margin-top: 60px;
    padding-left: 40px;
  }

  & .itemdiv {
    font-size: 25px;
  }
  
  & .igrGrid {
    margin-top: 30px;
  }

`;

export default Wrapper;
