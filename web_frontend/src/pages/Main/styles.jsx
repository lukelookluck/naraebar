import styled from "styled-components";

const Wrapper = styled.div`
    text-align: center;

    & .logoGrid {
        margin-top: 60px;
        height: 300px;
        background-color: rgb(183, 199, 253);
    }

    & #logo_en {
        margin-top: 70px;
        margin-bottom: 0;
        
        font-size: 70px;
    }
    & #logo_ko {
        font-size: 30px;
    }

    & .login {
        margin-top: 60px;
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
        background-color: rgb(151, 156, 228);
        text-decoration: none;
        border: none;
        color: white;
        font-size: 20px;
    }

    & .bottom {
        margin-top: 40px;
    }
`;

export default Wrapper;