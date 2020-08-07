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
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const dumpFile = CocktailDump;

const MyBar = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [endPage] = useState(dumpFile.length);

  const MyCocktail = dumpFile[0];

  const igrList = MyCocktail.ingredients.map((item) => {
    return (
      <ListGroupItem>
        <div className="listdiv">{item.igrname}</div>
        <div className="listdiv">{item.amount} ml</div>
      </ListGroupItem>
    );
  });

  const deleteRecipe = id => e => {
    try {
        // 삭제하라는 어떤 신호를 보내겠지


        console.log("삭제 버튼 클릭, id = " + id);
        alert('삭제 성공');
    } catch (e) {
        alert('네트워크 연결에 문제가 있어 레시피 삭제에 실패했습니다.');
    }
};


  return (
    <Wrapper>
      <Grid container className="syncButtonGrid" justify="flex-end">
        <SyncButton />
      </Grid>

      <Grid container className="recipe" justify="center" alignItems="center">
        <Card>
          <Card.Body>
            <Card.Title>
              <div className="namediv">
                {MyCocktail.name}
              </div>
              <div className="iconbtndiv">
                <IconButton aria-label="delete" className="deletebtn" onClick={deleteRecipe(MyCocktail.id)}>
                  <DeleteIcon/>
                </IconButton>
              </div>
            </Card.Title>
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
