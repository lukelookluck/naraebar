import styled from 'styled-components';

const Wrapper = styled.div`
  & .card-body {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    height: auto;
  }

  & .my-img {
    max-width: 100%;
    max-height: 100%;
  }

  & .card-text {
    /* text-align: center; */
    /* vertical-align: bottom; */
    max-width: 75%;
    width: 50%;
  }

  & .card-title {
    font-size: 100px;
    font-weight: 900;
    margin: 0;
  }

  & .card-subtitle {
    font-size: 70px;
    font-weight: 500;
  }

  & .card-description {
    margin-top: 5%;
    margin-bottom: 5%;
  }

  & ul {
    list-style: none;
    padding: 0;
  }

  & li {
    display: inline-block;
    /* float: left; */
    margin-right: 10%;
  }

  & .card-button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
  }
`;

export default Wrapper;
