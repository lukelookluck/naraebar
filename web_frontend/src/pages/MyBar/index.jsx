import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import {
  ListGroup,
  ListGroupItem,
  Card,
  Button,
  Pagination,
} from "react-bootstrap";
import Wrapper from "./styles";
import SyncButton from "../../components/SyncButton";
import CocktailDump from "./CocktailDump.json";
import MyPagination from "../../components/MyPagination";

const DumpFile = CocktailDump;
const DumpFileLength = DumpFile.length;
const MyBar = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [endPage] = useState(DumpFileLength);

  return (
    <Wrapper>
      <Grid container className="syncButtonGrid" justify="flex-end">
        <SyncButton />
      </Grid>
      <Grid container className="recipe" justify="center" alignItems="center">
        <Card>
          <Card.Body>
            <Card.Title>Frozen Margerita</Card.Title>
            <hr />
            <Card.Img
              variant="top"
              src={require("./images/FrozenMargerita.jpg")}
            />
            <hr />
            <Card.Text>
              대충 프로즌 마르게리타 설명 및 만드는법.
              <hr />
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>재료 1</ListGroupItem>
            <ListGroupItem>재료 2</ListGroupItem>
            <ListGroupItem>재료 3</ListGroupItem>
          </ListGroup>
        </Card>
      </Grid>

      <Grid container justify="center" className="pagination">
        <MyPagination />
      </Grid>
    </Wrapper>
  );
};

export default MyBar;
