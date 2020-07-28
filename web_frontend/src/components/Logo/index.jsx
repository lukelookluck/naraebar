import React from "react";
import Grid from "@material-ui/core/Grid";

import Wrapper from "./style";

export default function () {
  return (
    <Wrapper>
      <Grid container className="logo-box">
        <Grid item xs={12}>
          <img className="logo-image" src="images/Logo.png" alt="Logo" />
        </Grid>
      </Grid>
    </Wrapper>
  );
}
