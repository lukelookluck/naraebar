import React, { Component, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../../layout/';
import Wrapper from './styles';
import axios from "axios";

export default class MakingCocktail extends Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.history.push('/CompleteCocktail');
      console.log("다음으로!");
    }, 20000)
  }

  // componentDidMount() {
  //   let goComplete = () => {
  //     axios
  //       .get(`/bartender/recipe/done`)
  //       .then(res => {
  //         //  this.props.onReceive(res.data.number);
  //         console.log("res.data : " + res.data);
  //         console.log("what : " + res.data.what);
  //         // if (res.data.what === "$,DONE,MAKE,&") {
  //         //   this.props.history.push('/CompleteCocktail');
  //         // } 
  //       });
  //   }

  //   setTimeout(goComplete, 1000); // 1초마다 get 호출하면서 완성됐는지 확인
  //   goComplete();
  // }

  render() {
    return (
      <Layout>
        <Wrapper>
          <div className="container">
            <div className="bartender">
              <img src="images/bartender1.gif"></img>
            </div>
            <h1>잠시만 기다려주세요!</h1>
          </div>
        </Wrapper>
      </Layout>
    );
  }
}


// const MakingCocktail = () => {

//   let history = useHistory();

//   function goComplete(name) {
//     history.push(name);
//   }

//   function refreshList() {
//     axios
//       .get(`/bartender/recipe/done`)
//       .then(res => {
//         console.log(res.data);
//         goComplete('/CompleteCocktail/');
//       })
//       .catch((err) => console.log(err + "왜 에러가 난걸까"));
//   }

//   useEffect(() => {
//     refreshList();
//   }, []);


//   return (
//     <Layout>
//       <Wrapper>
//         <div className="container">
//           <div className="bartender">
//             <img src="images/bartender1.gif"></img>
//           </div>
//           <h1>잠시만 기다려주세요!</h1>
//         </div>
//       </Wrapper>
//     </Layout>
//   );
// };

// export default MakingCocktail;