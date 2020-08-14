import React, { useState, useEffect, Fragment, useContext } from "react";
import { Grid, Button } from "@material-ui/core";
import {
  ListGroup,
  ListGroupItem,
  Card,
} from "react-bootstrap";
import Wrapper from "./styles";
import SyncButton from "../../components/SyncButton";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { MemoryRouter, Route } from "react-router";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";

import { CommonContext } from "../../context/CommonContext";
import axios from "axios";

const MyBar = () => {

  const { serverUrl, user } = useContext(CommonContext);
  const [menuList, setMenuList] = useState([]);
  const [index, setIndex] = useState(0);

  const MyCocktail = menuList[index];

  function refreshList() {
    axios
      .get(`${serverUrl}/recipe/list`, {
        headers: {
          Authorization: `JWT ${user.token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setMenuList(res.data);
      })
      .catch((err) => console.log(err + " 에러났음"));
  }

  useEffect(() => {
    refreshList();
    if (menuList.length === 0) {
      console.log("i don't know")
    }
  }, []);

  const deleteRecipe = id => e => {
    try {
      // 삭제하라는 어떤 신호를 보내겠지


      console.log("삭제 버튼 클릭, id = " + id);
      alert('삭제 성공');
    } catch (e) {
      alert('네트워크 연결에 문제가 있어 레시피 삭제에 실패했습니다.');
    }
  };

  function igrList() {
    return (
      <Fragment>
        {
          MyCocktail.strIngredient1 != "null"
            ? (<ListGroupItem>
              <div className="listdiv">{MyCocktail.strIngredient1}</div>
              <div className="listdiv">{MyCocktail.strMeasure1} ml</div>
            </ListGroupItem>)
            : (<div></div>)
        }
        {
          MyCocktail.strIngredient2 != "null"
            ? (<ListGroupItem>
              <div className="listdiv">{MyCocktail.strIngredient2}</div>
              <div className="listdiv">{MyCocktail.strMeasure2} ml</div>
            </ListGroupItem>)
            : (<div></div>)
        }
        {
          MyCocktail.strIngredient3 != "null"
            ? (<ListGroupItem>
              <div className="listdiv">{MyCocktail.strIngredient3}</div>
              <div className="listdiv">{MyCocktail.strMeasure3} ml</div>
            </ListGroupItem>)
            : (<div></div>)
        }
        {
          MyCocktail.strIngredient4 != "null"
            ? (<ListGroupItem>
              <div className="listdiv">{MyCocktail.strIngredient4}</div>
              <div className="listdiv">{MyCocktail.strMeasure4} ml</div>
            </ListGroupItem>)
            : (<div></div>)
        }
        {
          MyCocktail.strIngredient5 != "null"
            ? (<ListGroupItem>
              <div className="listdiv">{MyCocktail.strIngredient5}</div>
              <div className="listdiv">{MyCocktail.strMeasure5} ml</div>
            </ListGroupItem>)
            : (<div></div>)
        }
        {
          MyCocktail.strIngredient6 != "null"
            ? (<ListGroupItem>
              <div className="listdiv">{MyCocktail.strIngredient6}</div>
              <div className="listdiv">{MyCocktail.strMeasure6} ml</div>
            </ListGroupItem>)
            : (<div></div>)
        }
      </Fragment>
    );
  };

  return (
    <Wrapper>
      {
        MyCocktail
        ? (<Fragment>
            <Grid container className="syncButtonGrid" justify="flex-end">
              <SyncButton />
            </Grid>
            <Grid container className="recipe" justify="center" alignItems="center">
              <Card>
                <Card.Body>
                  <Card.Title>
                    <div className="namediv">
                      {MyCocktail.strDrink}
                    </div>
                    <div className="iconbtndiv">
                      <IconButton aria-label="delete" className="deletebtn" onClick={deleteRecipe(MyCocktail.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </Card.Title>
                  <hr />
                  <Card.Img variant="top" src={MyCocktail.imgDrink} />
                  <hr />
                  <Card.Text>{MyCocktail.strInstructions}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  {igrList()}
                </ListGroup>
              </Card>
            </Grid>

            <Grid container justify="center" className="pagination">
              <MemoryRouter initialEntries={["/inbox"]} initialIndex={0}>
                <Route>
                  {({ location }) => {
                    const query = new URLSearchParams(location.search);
                    const page = parseInt(query.get("page") || "1", 10);
                    return (
                      <Pagination
                        size="small"
                        page={page}
                        count={menuList.length}
                        onChange={setIndex(page - 1)}
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
            </Grid>
          </Fragment>)
        : (<div className="sug">커뮤니티에서 레시피를 찜해보세요!</div>)
      }
    </Wrapper>
  );
};

export default MyBar;