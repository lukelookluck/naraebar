import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";
import Wrapper from "./styles";
import Layout from "../../layout/";

import Header from "../../layout/Header";

const UploadRecipe = () => {
  return (
    <Wrapper>
      <Header />
      <Grid container justify="center" alignItems="center"></Grid>
    </Wrapper>
  );
};

export default UploadRecipe;
