import React from "react";
import { Link } from "react-router-dom";

import CreateIcon from "@material-ui/icons/Create";

import Wrapper from "./style";

export default function () {
  return (
    <Wrapper>
      <div>
        <Link to="/Community/Create">
          <button className="go-articleForm-button">
            <CreateIcon color="secondary" fontSize="small" /> 글 쓰기
          </button>
        </Link>
      </div>
    </Wrapper>
  );
}
