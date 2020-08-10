import styled from "styled-components";

const Wrapper = styled.div`
  & .custom-control {
    margin: 0 20px;
  }

  & .btn {
    background-color: rgb(76, 127, 188);
    text-decoration: none;
    border: none;
    color: white;
    font-family: 'IBMPlexSansKR-Text';
  }
`;

export default Wrapper;
