import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';
import { signIn } from './auth';

const Main = () => {

    let history = useHistory();

    const login = ({ id, pw }) => setUser(signIn({ id, pw }));
    const [user, setUser] = useState(null);


    const onClickRedirectPathHandler = name => e => {
        window.scrollTo(0, 0);
        history.push(name);
    };

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const handleLogin = () => {
        try {
            login({ id, pw });
            history.push("/Community");
            console.log("로그인 됨");
        } catch (e) {
            alert('Failed to login');
            setId('');
            setPw('');
        }
    };

    return (
        <div className="App">
            <div className="logo_div">
                <p className="logo_en">NaReBar</p>
                <p className="logo_ko">나만의 레시피 바텐더</p>
            </div>

            <div className="login">

                <div>
                    <input id="id" type="text" name="id" placeholder="ID"
                        value={id} onChange={({ target: { value } }) => setId(value)}></input>
                </div>
                <div>
                    <input id="pw" type="password" name="pw" placeholder="PASSWORD"
                        value={pw} onChange={({ target: { value } }) => setPw(value)}></input>
                </div>
                <button id="login_btn" onClick={handleLogin}>LOGIN</button>

            </div>

            <div className="link_div">
                <div id="signup" onClick={onClickRedirectPathHandler('/SignUp')}>SIGN UP</div>
                <div id="findpw" onClick={onClickRedirectPathHandler('/FindPW')}>FIND PASSWORD</div>
            </div>
        </div>
    );
};

export default Main;




// class Main extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             id: "",
//             pw: ""
//         }
//     }

//     handleId = e => {
//         this.setState({ id: e.target.value });
//     };

//     handlePw = e => {
//         this.setState({ pw: e.target.value });
//     };

//     handleSubmit = e => {
//         e.preventDefault();
//         console.log("클릭함");

//         const login_info = {
//             method: "POST",
//             body: JSON.stringify(this.state),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         };

//         fetch("http://localhost:9089/login", login_info)
//             .then(res => {
//                 return res.json();
//             })
//             .then(json => {
//                 //json형식 {idx: 8, nickname: "noh", email: "noh@gmail.com", success: true}
//                 if (json.success === true) {
//                     alert("로그인되었습니다");
//                     // 서버로 부터 받은 JSON형태의 데이터를 로컬스토리지에 우선 저장한다.
//                     window.localStorage.setItem('dump', JSON.stringify(json))
//                     //스테이트에 유저정보를 저장한다.
//                     this.setState({
//                         id: json.id,
//                         pw: json.pw
//                     });
//                     this.props.history.push("/Community")
//                 } else {
//                     alert("아이디 혹은 비밀번호를 확인하세요");
//                 }
//             });
//     };

//     render() {

//         const onClickRedirectPathHandler = name => e => {
//             window.scrollTo(0, 0);
//             this.props.history.push(name);
//         };

//         return (
//             <div className="App">
//                 <div className="logo">
//                     <p className="logo_en">NaReBar</p>
//                     <p className="logo_ko">나만의 레시피 바텐더</p>
//                 </div>

//                 <div className="login">
//                     <form onSubmit={this.handleSubmit}>
//                         <div>
//                             <input id="id" type="text" name="id" placeholder="ID" value={this.state.id} onChange={this.handleId}></input>
//                         </div>
//                         <div>
//                             <input id="pw" type="password" name="pw" placeholder="PASSWORD" value={this.state.pw} onChange={this.handlePw}></input>
//                         </div>
//                         <button id="login_btn" type="submit">LOGIN</button>

//                     </form>
//                 </div>

//                 <div className="link_div">
//                     <div id="signup" onClick={onClickRedirectPathHandler('/SignUp')}>SIGN UP</div>
//                     <div id="findpw" onClick={onClickRedirectPathHandler('/FindPW')}>FIND PASSWORD</div>
//                 </div>
//             </div>
//         );
//     };
// };

// export default Main;
