import React from "react";
import Layout from "../../layout/";
import Grid from "@material-ui/core/Grid";

import Wrapper from "./style";

// import Logo from "../../components/Logo/";
// import Nav from "../../components/NavigationMenu/";
import Recipe from "../../components/Community/RecipeList/";
import CreateArticleButton from "../../components/Community/CreateArticleButton/";

const Community = () => {
  return (
    <Wrapper>
      <Grid>
        {/* <Logo /> */}
        {/* <Nav /> */}
        <Recipe />
        <CreateArticleButton />
      </Grid>
    </Wrapper>
  );
};

export default Community;
