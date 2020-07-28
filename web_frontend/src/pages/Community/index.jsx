import React from "react";
import Layout from "../../layout/";
import "./style.css";

import Logo from "../../components/Logo/";
import Nav from "../../components/NavigationMenu/";
import Recipe from "../../components/RecipeList/";

import Wrapper from "./style_wrapper";

const Community = () => {
  return (
    <Layout>
      <Wrapper>
        <Logo />
        <Nav />
        <Recipe />
      </Wrapper>
    </Layout>
  );
};

export default Community;
