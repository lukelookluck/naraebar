import React from "react";
import Layout from "../../layout/";
import Grid from "@material-ui/core/Grid";

import Wrapper from "./style";

// import Logo from "../../components/Logo/";
// import Nav from "../../components/NavigationMenu/";
import RecipeList from "../../components/Community/Recipe/RecipeList/";
import CreateArticleButton from "../../components/Community/ArticleForm/CreateArticleButton/";

const Community = () => {
  return (
    <Wrapper>
      <Grid>
        {/* <Logo /> */}
        {/* <Nav /> */}
        <RecipeList />
        {/* <CreateArticleButton /> */}
      </Grid>
    </Wrapper>
  );
};

export default Community;
