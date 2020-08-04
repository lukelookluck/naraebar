import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;

  & .article-create-button {
    border: none;
    border-radius: 25px;
    padding: 7px 10px;
    background-color: rgb(56, 97, 182);

    height: 35px;

    font-size: 15px;
    color: white;
  }

  & .form-header-title {
    margin-top: 65px;
    font-size: 25px;
  }

  & .form-control {
    border: 0;
  }

  & .form-group input::placeholder {
    color: #a1a1a1;
    font-weight: 700;
  }

  & textarea::placeholder {
    color: #a1a1a1;
    font-weight: 500;
  }

  & .form-textarea {
    height: 15vh;
  }

  & .form-row .col input::placeholder {
    color: #a1a1a1;
    font-weight: 500;
  }
`;

export default Wrapper;
