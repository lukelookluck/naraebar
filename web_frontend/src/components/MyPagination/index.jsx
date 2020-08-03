import React from "react";
import ReactDOM from "react-dom";
import { Grid, Pagination } from "react-bootstrap";
import dumpfile from "../../pages/MyBar/CocktailDump.json";

export default class MyPagination extends React.Component {
  // class MyPagination extends React.Component {
  getCocktails = () => {
    const cocktails = dumpfile;
    return cocktails;
  };

  state = {
    cocktails: this.getCocktails(),
    pageSize: 1,
    currentPage: 1,
  };

  render() {
    const endPage = this.state.cocktails.length;

    if (endPage < 10) return <p>endPage</p>;

    return (
      <Grid>
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Item>{4}</Pagination.Item>
          <Pagination.Item>{5}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </Grid>
    );
  }
}

// ReactDOM.render(<MyPagination />, document.getElementById("root"));
