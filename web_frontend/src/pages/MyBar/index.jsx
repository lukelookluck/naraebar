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

const dumpFile = CocktailDump;

const MyBar = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [endPage] = useState(dumpFile.length);

  const cocktailName = `${dumpFile[0].strDrink}`;
  const cocktailImageUrl = `${dumpFile[0].strDrinkThumb}`;
  const cocktailText = `${dumpFile[0].strInstructions}`;
  const cocktailIngredient = `${dumpFile[0].strIngredient1}`;

  return (
    <Wrapper>
      <Grid container className="test_lym" justify="center" alignItems="center">
        <p>test</p>
      </Grid>

      <Grid container className="syncButtonGrid" justify="flex-end">
        <SyncButton />
      </Grid>

      <Grid container className="recipe" justify="center" alignItems="center">
        <Card>
          <Card.Body>
            <Card.Title>{cocktailName}</Card.Title>
            <hr />
            <Card.Img variant="top" src={cocktailImageUrl} />
            <hr />
            <Card.Text>{cocktailText}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{cocktailIngredient}</ListGroupItem>
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
