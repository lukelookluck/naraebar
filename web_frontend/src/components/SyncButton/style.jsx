import styled from "styled-components";

const Wrapper = styled.div`
  & .custom-control {
    position: fixed;
    right: 50%;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0px;
    padding: 5px 10px;
    font-size: 0.9rem;
  }
`;

export default Wrapper;
