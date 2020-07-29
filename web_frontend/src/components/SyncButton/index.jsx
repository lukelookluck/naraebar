import React from "react";
import Wrapper from "./style";
import Grid from "@material-ui/core/Grid";

const SyncButton = () => {
  return (
    <Wrapper>
      <Grid className="custom-control custom-switch">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customSwitches"
          readOnly
        />
        <label className="custom-control-label" htmlFor="customSwitches">
          Sync
        </label>
      </Grid>
    </Wrapper>
  );
};

export default SyncButton;
