import React, { useState, setState } from "react";
import { MemoryRouter, Route } from "react-router";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";
import CocktailDump from "../../pages/MyBar/dump.json";

const dumpFile = CocktailDump;

export default function PaginationLink () {

  // const [text, setText] = useState('');

  // const onFormSubmit = e => {
  //   e.preventDefault();
  //   this.props.onSubmit(text);
  //   console.log(text + "여기는 왔니?");
  // };
  
  return (
    <MemoryRouter initialEntries={["/inbox"]} initialIndex={0}>
      <Route>
        {({ location }) => {
          const query = new URLSearchParams(location.search);
          const page = parseInt(query.get("page") || "1", 10);
          return (
            // <form onSubmit={onFormSubmit}>
              <Pagination
                size="small"
                page={page}
                count={dumpFile.length}

                // onChange={setText(page + "살려줘")}
                
                renderItem={(item) => (
                  <PaginationItem
                    component={Link}
                    to={`/inbox${item.page === 1 ? "" : `?page=${item.page}`}`}
                    {...item}
                  />
                )}
              />
            // </form>
          );
        }}
      </Route>
    </MemoryRouter>
  );
}
