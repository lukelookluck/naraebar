import React from "react";
import Wrapper from "./styles";
import { Grid } from "@material-ui/core";

const Header = () => {
  return (
    <Wrapper>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} className="logoGrid">
          <p id="logo">NaReBar</p>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Header;
