import React, {Component} from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../../layout/';
import Wrapper from './styles';
import { Grid } from "@material-ui/core";
import '../../index.css';

export default class Cleaning extends Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.history.push('/Start');
      console.log("처음으로");

    }, 20000) // 5초 후 실행
  }

  render() {
    return (
      <Layout>
        <Wrapper>
          <div className="container">
            <div className="gif">
              <img src="images/cleaning.gif"></img>
            </div>
            <h1>쓱싹쓱싹</h1>
          </div>
        </Wrapper>
      </Layout>
    );
  }
};
