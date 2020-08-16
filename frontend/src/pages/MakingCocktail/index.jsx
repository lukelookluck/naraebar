import React, {Component} from 'react';
import Layout from '../../layout/';
import Wrapper from './styles';

export default class MakingCocktail extends Component {
  
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push('/CompleteCocktail');
      console.log("다음으로!");
    }, 5000) // 지금은 임의로 만드는 중 5초 띄우고 완성으로 넘김. 추후 수정예정
  }
  
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
