import React from "react";
import Layout from "../../layout/";
import Grid from "@material-ui/core/Grid";

import Wrapper from "./style";

import Logo from "../../components/Logo/";
import Nav from "../../components/NavigationMenu/";
import Recipe from "../../components/RecipeList/";

const Community = () => {
  return (
    <Layout>
      <Wrapper>
        <Grid>
          <Logo />
          <Nav />
          <Recipe />
        </Grid>
      </Wrapper>
    </Layout>
  );
};

export default Community;
