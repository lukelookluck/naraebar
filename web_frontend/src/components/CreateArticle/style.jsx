import styled from "styled-components";

const Wrapper = styled.div`
  & .create-button {
    position: fixed;
    /* right: 50%; */
    left: 50%;
    transform: translateX(-50%);
    bottom: 2.5%;

    border: 0.5px solid #9b9b9b;
    border-radius: 15px;
    padding: 5px 10px;
    background-color: whitesmoke;

    font-size: 0.9rem;
  }

  & .create-button:hover {
    background: rgb(56, 97, 182);

    color: white;
  }
`;

export default Wrapper;
