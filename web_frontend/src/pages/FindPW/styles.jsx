import styled from "styled-components";

const Wrapper = styled.div`
    text-align: center;

    & .findpw {
        height: 150px;
    }

    & .findpw div {
        margin-top: 65px;
        font-size: 25px;
    }

    & form div {
        margin-top: 5px;
        margin-bottom: 5px;
    }

    & .submitBtn {
        margin-top: 30px;
        height: 50px;
        width: 180px;
        background-color: rgb(76, 127, 188);
        text-decoration: none;
        border: none;
        color: white;
        font-size: 20px;
    }

    & .submitBtn:hover {
        background-color: rgb(76, 127, 188);
    }

`;

export default Wrapper;