import styled from "styled-components";

const Wrapper = styled.div`
    text-align: center;
    & .myAppbar {
        background-color: rgb(255, 200, 200);
    }

    & .navTabs {
        
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