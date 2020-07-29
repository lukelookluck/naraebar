import React from "react";
import Wrapper from "./style";

const SyncButton = () => {
  return (
    <Wrapper>
      <div className="custom-control custom-switch">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customSwitches"
          readOnly
        />
        <label className="custom-control-label" htmlFor="customSwitches">
          Sync
        </label>
      </div>
    </Wrapper>
  );
};

export default SyncButton;
