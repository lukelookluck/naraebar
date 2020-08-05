import styled from "styled-components";

const Wrapper = styled.div`
    text-align: center;

    & .logoGrid {
        // margin-top: 60px;
        height: 360px;
        background-color: rgb(56, 97, 149);
        color: white;
    }

    & #logo_en {
        margin-top: 100px;
        margin-bottom: 0;
        
        font-size: 70px;
    }
    & #logo_ko {
        font-size: 30px;
    }

    & .login {
        margin-top: 70px;
    }

    & #id {
        width: 100%;
        height: 40px;
        margin-bottom: 20px;
    }

    & #pw {
        width: 100%;
        height: 40px;
        margin-bottom: 20px;
    }

    & .login_btn {
        margin-top: 30px;
        width: 100%;
        height: 50px;
        background-color: rgb(76, 127, 188);
        text-decoration: none;
        border: none;
        color: white;
        font-family: 'IBMPlexSansKR-Text';
        font-size: 20px;
        margin-bottom: 30px;
    }

    & .login_btn:hover {
        background-color: rgb(76, 127, 188);
    }

    & .bottom {
        color: rgb(56, 97, 149);
        font-family: 'IBMPlexSansKR-Text';
    }
`;

export default Wrapper;