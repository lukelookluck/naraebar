import React, { useState, Component } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

import Wrapper from "./style";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import RecipieListDisplay from "../RecipieListDisplay/";

class RecipeList extends Component {
  state = {
    loading: "123",
    articleList: [],
    commentList: [],
  };
  componentDidMount() {
    this.refreshList();
  }
  refreshList = () => {
    axios
      .get("http://192.168.0.4:8100/community/", {
        // headers: {
        //   Authorization: `JWT ${localStorage.getItem("token")}`,
        // },
        // params: {
        //   article: 1,
        // },
      })
      .then((res) => {
        console.log(res.data);
        this.setState({ loading: "123123", articleList: res.data });
        // console.log(this.state.loading);
      })
      .catch((err) => console.log(err));
  };

  likeSubmit = (article) => {
    console.log(article);
    axios
      .post(
        `http://192.168.0.4:8100/community/article/${article.id}/`,
        { user: article.user }, // 현재 유저 정보 넣기
        {
          // headers: {
          //   dd
          // }
        }
      )
      .then((res) => {
        console.log(res.data);

        // this.refreshList();
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Wrapper>
        <Grid className="list-box">
          <RecipieListDisplay
            list={this.state.articleList}
            likeSubmit={this.likeSubmit}
          />
        </Grid>
      </Wrapper>
    );
  }
}

export default RecipeList;
