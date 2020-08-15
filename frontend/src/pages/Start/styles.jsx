import styled from 'styled-components';

const Wrapper = styled.div`
    
    text-align: center;
    
    & .logo p {
        margin-top: 180px;
        font-size: 200px;
        font-family: 'Cafe24Ohsquare';
        color: rgb(56, 97, 149);
        margin-bottom: 0px;
    }

    & .logo h1 {
        font-size: 70px;
        font-family: 'IBMPlexSansKR-Text';
    }

    & .btnCleaning {
        background-color: rgb(200, 200, 200);
        text-decoration: none;
        border: none;
        color: black;
        font-size: 50px;
        font-family: 'IBMPlexSansKR-Text';
        height: 100px;
        width: 250px;
        margin-right: 30px;
    }

    & .btnStart {
        background-color: rgb(76, 127, 188);
        text-decoration: none;
        border: none;
        color: white;
        font-family: 'IBMPlexSansKR-Text';
        font-size: 50px;
        height: 100px;
        width: 250px;
        margin-left: 30px;
    }

    & .btnStart:hover {
        background-color: rgb(76, 127, 188);
    }

`

export default Wrapper;