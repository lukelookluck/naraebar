import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import {
  ListGroup,
  ListGroupItem,
  Card,
  Pagination,
} from "react-bootstrap";
import Wrapper from "./styles";
import SyncButton from "../../components/SyncButton";
// import CocktailDump from "./CocktailDump.json";
import CocktailDump from "./dump.json";
import MyPagination from "../../components/MyPagination";

const dumpFile = CocktailDump;

const MyBar = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [endPage] = useState(dumpFile.length);

  const MyCocktail = dumpFile[0];

  const igrList = MyCocktail.ingredients.map((item) => {
    return (
      // <ListGroup className="list-group-flush">
            <ListGroupItem>
              <div className="listdiv">{item.igrname}</div>
              <div className="listdiv">{item.amount} ml</div>
            </ListGroupItem>
      // </ListGroup>
    );
  });


  return (
    <Wrapper>
      <Grid container className="syncButtonGrid" justify="flex-end">
        <SyncButton />
      </Grid>

      <Grid container className="recipe" justify="center" alignItems="center">
        <Card>
          <Card.Body>
            <Card.Title>{MyCocktail.name}</Card.Title>
            <hr />
            <Card.Img variant="top" src={MyCocktail.img} />
            <hr />
            <Card.Text>{MyCocktail.details}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            {igrList}

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
