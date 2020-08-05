import React, { useState, Component } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

import Wrapper from "./style";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import dumpfile from "../../../pages/Community/ArticleDump.json";
import RecipieListDisplay from "../RecipieListDisplay";

class RecipeList extends Component {
  state = {
    loading: "123",
    articleList: [],
  };

  componentDidMount() {
    this.refreshList();
  }
  refreshList = () => {
    axios
      .get("http://localhost:8080/community/", {
        // headers: {
        //   Authorization: `JWT ${localStorage.getItem("token")}`,
        // },
      })
      .then((res) => {
        console.log(this.state.articleList);
        this.setState({ loading: "123123", articleList: res.data });
        console.log(this.state.articleList);
        console.log(this.state.loading);
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <Wrapper>
        <Grid className="list-box">
          <RecipieListDisplay list={this.state.articleList} />
        </Grid>
      </Wrapper>
    );
  }
}

export default RecipeList;
