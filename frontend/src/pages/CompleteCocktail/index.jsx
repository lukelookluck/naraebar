import React, {Component} from 'react';
import Layout from '../../layout/';
import Wrapper from './styles';

export default class CompleteCocktail extends Component {
  
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push('/Start');
      console.log("처음으로!");

      // this.props.history.push('/Cleaning');
      // console.log("청소중!");

    }, 5000) // 5초 후 실행
  }
  
  render() {
    return (
      <Layout>
        <Wrapper>
            <div className="container">
                <div className="bartender">
                    <img src="images/bartender2.gif"></img>
                </div>
                <h1>맛있게 드세요 :)</h1>
            </div>

        </Wrapper>
      </Layout>
    );
  }
}

// const CompleteCocktail = () => {
//   return (
//     <Layout>
//         <div className="container">
//             <div className="bartender">
//                 <img src="images/bartender2.gif"></img>
//             </div>
//             <h1>Take it and<br></br>Enjoy your drink!</h1>
//         </div>
//     </Layout>
//   );
// };

// export default CompleteCocktail;
