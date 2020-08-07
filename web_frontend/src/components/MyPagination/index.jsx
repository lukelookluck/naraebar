import React from "react";
import { MemoryRouter, Route } from "react-router";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";
import CocktailDump from "../../pages/MyBar/dump.json";

const dumpFile = CocktailDump;

export default function PaginationLink() {

  return (
    <MemoryRouter initialEntries={["/inbox"]} initialIndex={0}>
      <Route>
        {({ location }) => {
          const query = new URLSearchParams(location.search);
          const page = parseInt(query.get("page") || "1", 10);
          return (
            <Pagination
              size="small"
              page={page}
              // count에 dump.length 적용해야함
              count={dumpFile.length}
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`/inbox${item.page === 1 ? "" : `?page=${item.page}`}`}
                  {...item}
                />
              )}
            />
          );
        }}
      </Route>
    </MemoryRouter>
  );
}
