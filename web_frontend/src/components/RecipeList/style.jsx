import styled from "styled-components";

const Wrapper = styled.div`
  & .list-box {
    margin-top: 15%;
    padding-left: 10%;
    padding-right: 10%;
  }

  & .list-card {
    margin-bottom: 20%;
  }

  & .list-user {
    display: flex;
    justify-content: start;
    margin-left: 2%;
    margin-bottom: 4%;
  }

  & .list-item {
    /* display: flex; */
    margin-bottom: 4%;
  }

  & .list-item-image {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
  }

  & .list-item-detail {
    /* flex: auto; */
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .like-button {
    margin-left: 2%;
    margin-right: 2%;
    display: flex;
    justify-content: space-between;
  }

  & .detail-content {
    font-size: 1em;
  }
`;

export default Wrapper;
