import styled from 'styled-components';

const Wrapper = styled.div`
    
    text-align: center;

    & .setting {
        margin-top: 60px;
        margin-left: 800px;
    }
    
    & .logo p {
        margin-top: 150px;
        font-size: 200px;
        font-family: 'Cafe24Ohsquare';
        color: rgb(56, 97, 149);
        margin-bottom: 0px;
    }

    & .btndiv {
        margin-top: 40px;
    }

    & .btnCleaning {
        background-color: rgb(140, 140, 140);
        text-decoration: none;
        border: none;
        color: white;
        font-size: 50px;
        font-family: 'IBMPlexSansKR-Text';
        height: 100px;
        width: 300px;
        margin-right: 90px;
    }

    & .btnCleaning:hover {
        background-color: rgb(140, 140, 140);
    }

    & .btnStart {
        background-color: rgb(76, 127, 200);
        text-decoration: none;
        border: none;
        color: white;
        font-family: 'IBMPlexSansKR-Text';
        font-size: 50px;
        height: 100px;
        width: 300px;
        margin-left: 90px;
    }

    & .btnStart:hover {
        background-color: rgb(76, 127, 200);
    }

    & .MuiSvgIcon-root {
        width: 50px;
        height: 50px;
    }

`

export default Wrapper;