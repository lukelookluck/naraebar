import React from "react";
import CreateIcon from "@material-ui/icons/Create";

import Wrapper from "./style";

export default function () {
  return (
    <Wrapper>
      <div>
        <button className="create-button">
          <CreateIcon color="secondary" fontSize="small" /> 글 쓰기
        </button>
      </div>
    </Wrapper>
  );
}
