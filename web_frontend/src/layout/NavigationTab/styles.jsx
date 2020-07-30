import styled from "styled-components";

const Wrapper = styled.div`
    text-align: center;
    & .myAppbar {
    //    margin-top: 0;
    }

    & .navTabs {
        background-color: rgb(255, 255, 255);
    }

    & .myTab {
        font-size: 20px;
        height: 50px;
    }
    & .myTab:hover {
        text-decoration: none;
    }

`;

export default Wrapper;