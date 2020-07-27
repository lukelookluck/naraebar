import React from 'react';
import './style.css';
import { useHistory } from 'react-router-dom'

// const handleSubmit = e => {
//     console.log("클릭함");
// };

const Main = () => {

    let history = useHistory();

    const onClickRedirectPathHandler = name => e => {
        window.scrollTo(0, 0);
        history.push(name);
    };

    return (
        <div className="App">
            <div className="logo">
                <p className="logo_en">NaReBar</p>
                <p className="logo_ko">나만의 레시피 바텐더</p>
            </div>

            <div className="login">
                
                <div>
                    <input id="id" type="text" name="id" placeholder="ID"></input>
                </div>
                <div>
                    <input id="pw" type="password" name="pw" placeholder="PASSWORD"></input>
                </div>
                <button id="login_btn">LOGIN</button>
            </div>

            <div className="link_div">
                <div id="signup" onClick={onClickRedirectPathHandler('/SignUp')}>SIGN UP</div>
                <div id="findpw" onClick={onClickRedirectPathHandler('/FindPW')}>FIND PASSWORD</div>
            </div>
        </div>
    );
};

export default Main;
