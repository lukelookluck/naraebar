import styled from "styled-components";

const Wrapper = styled.div`
  & .form-box {
    padding: 2.5% 2.5% 0 2.5%;
  }

  & .article-create-button {
    border: none;
    border-radius: 25px;
    padding: 7px 10px;
    background-color: rgb(56, 97, 182);

    height: 35px;

    font-size: 15px;
    color: white;
  }

  & .form-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    height: 35px;
  }

  & .form-header2 {
    display: flex;
    flex-direction: row;
  }

  & .form-header-title {
    font-size: 1.4rem;
    margin: 0;
    margin-left: 10px;
  }

  & .form-control {
    border: 0;
  }

  & input::placeholder {
    color: #a1a1a1;
    font-weight: 700;
  }

  & textarea::placeholder {
    color: #a1a1a1;
    font-weight: 500;
  }

  & .form-textarea {
    height: 60vh;
  }
`;

export default Wrapper;
