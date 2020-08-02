import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { itemsCount, pageSize } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);

  if (pageCount === 1) return null;

  const pages = _.range(1, pageCount + 1);

  return (
    <nav>
      {" "}
      {/* VSCode 입력: nav>ul.pagination>li.page-item>a.page-link */}
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page} className="page-item" style={{ cursor: "pointer" }}>
            <a className="page-link">{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
