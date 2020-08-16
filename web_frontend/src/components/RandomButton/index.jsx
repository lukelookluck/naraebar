import React from "react";
import Wrapper from "./style";
import { Grid, Button } from "@material-ui/core";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

const RandomButton = () => {
  const handleRandom = () => {
    try {
      console.log("try");
      alert("try");
    } catch (e) {
      alert("catch");
    }
  };

  return (
    <Wrapper>
      <Grid className="custom-control custom-switch">
        <Button
          variant="contained"
          className="btn"
          endIcon={<Icon>HelpOutlineIcon</Icon>}
          onClick={handleRandom}
        >
          Random Cocktail
        </Button>
      </Grid>
    </Wrapper>
  );
};

export default RandomButton;
