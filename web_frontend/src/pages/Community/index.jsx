import React from "react";
import Layout from "../../layout/";
import Grid from "@material-ui/core/Grid";

import Wrapper from "./style";

// import Logo from "../../components/Logo/";
// import Nav from "../../components/NavigationMenu/";
import Recipe from "../../components/RecipeList/";
import CreateArticleButton from "../../components/CreateArticleButton/";
import goBackBtn from "../../components/goBackButton/";

const Community = () => {
  return (
    <Wrapper>
      <Grid>
        {/* <Logo /> */}
        {/* <Nav /> */}
        <Recipe />
        <CreateArticleButton />
        <goBackBtn />
      </Grid>
    </Wrapper>
  );
};

export default Community;
