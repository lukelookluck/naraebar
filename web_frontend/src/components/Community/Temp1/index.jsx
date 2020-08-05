import React, { Component } from "react";

class Board extends Component {
  // num = 3; //모든 input 제어
  state = { input1: "", input2: "", num: 3 };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }; //추가 명령을 수행할 함수
  handleCreate = (data) => {
    data.preventDefault();
    console.log("num", this.state.num);
    // this.state.num++;
    // const { input1, input2, list } = this.state;
    if (this.state.num < 6) {
      this.setState({
        num: this.state.num + 1,
      });
    } else {
      alert("그만해!!!!!!!!!!!!");
    }
  };
  render() {
    const { handleChange, handleCreate } = this;
    const { input1, input2, num } = this.state;
    return (
      <div>
        <div>
          {[...Array(num)].map((item, index) => {
            // console.log("index", item);
            return (
              <div class="form-row mb-2" key={item}>
                <div className="col">
                  <input
                    class="form-control"
                    placeholder="재료명"
                    // rows="21"
                  ></input>
                </div>
                <div className="col">
                  <input
                    class="form-control"
                    placeholder="용량(ml)"
                    // rows="21"
                  ></input>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <button onClick={handleCreate}>추가</button>
        </div>
        {this.state.num}
      </div>
    );
  }
}
export default Board;
