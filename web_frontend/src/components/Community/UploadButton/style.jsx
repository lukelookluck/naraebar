import styled from "styled-components";

const Wrapper = styled.div`
  & .input-image-box {
    /* position: absolute; */
    bottom: 60px;
    /* margin-bottom: 60px; */
  }

  & .input-image {
    height: 20vh;
    width: 20vh;
    border-radius: 25px;
    margin-left: 1vh;
    margin-right: 10vh;
  }

  & .input-footer {
    position: fixed;
    bottom: 0%;
  }
`;
export default Wrapper;
