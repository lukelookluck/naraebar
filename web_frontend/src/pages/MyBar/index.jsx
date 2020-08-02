import React, { Component } from "react";
import Layout from "../../layout/";
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
import MyBarPagination from "./MyBarPagination";

export default class MoviesPage extends Component {
  getMovies = () => {
    const cocktails = [
      { id: 0, name: "Frozen Margerita0", recipe: "Recipe0" },
      { id: 1, name: "Frozen Margerita1", recipe: "Recipe1" },
      { id: 2, name: "Frozen Margerita2", recipe: "Recipe2" },
      { id: 3, name: "Frozen Margerita3", recipe: "Recipe3" },
      { id: 4, name: "Frozen Margerita4", recipe: "Recipe4" },
    ];
    return cocktails;
  };

  state = {
    cocktails: this.getCocktails(),
    pageSize: 3, // 한 페이지에 보여줄 아이템 개수
  };

  render() {
    const { length: count } = this.state.cocktails;

    if (count === 0) return <p>There are no cocktails in the database.</p>;

    return (
      <React.Fragment>
        <p>showing {count} cocktails in the database.</p>

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Recipe</th>
            </tr>
          </thead>
          <tbody>
            {this.state.cocktails.map((cocktail) => (
              <tr key={cocktail.id}>
                <td>{cocktail.id}</td>
                <td>{cocktail.name}</td>
                <td>{cocktail.recipe}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination
          itemsCount={count}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

// const MyBar = () => {
//   return (
//     <Wrapper>
//       <Grid container className="syncButtonGrid" justify="flex-end">
//         <SyncButton />
//       </Grid>
//       <Grid container className="recipe" justify="center" alignItems="center">
//         <Card>
//           <Card.Body>
//             <Card.Title>Frozen Margerita</Card.Title>
//             <hr />
//             <Card.Img
//               variant="top"
//               src={require("./images/FrozenMargerita.jpg")}
//             />
//             <hr />
//             <Card.Text>
//               대충 프로즌 마르게리타 설명 및 만드는법.
//               <hr />
//             </Card.Text>
//           </Card.Body>
//           <ListGroup className="list-group-flush">
//             <ListGroupItem>재료 1</ListGroupItem>
//             <ListGroupItem>재료 2</ListGroupItem>
//             <ListGroupItem>재료 3</ListGroupItem>
//           </ListGroup>
//         </Card>
//       </Grid>

//       <Grid container justify="center" className="pagination">
//         <Pagination>
//           <Pagination.First />
//           <Pagination.Prev />
//           <Pagination.Item>{1}</Pagination.Item>
//           <Pagination.Item>{2}</Pagination.Item>
//           <Pagination.Item>{3}</Pagination.Item>
//           <Pagination.Item>{4}</Pagination.Item>
//           <Pagination.Item>{5}</Pagination.Item>
//           <Pagination.Next />
//           <Pagination.Last />
//         </Pagination>
//       </Grid>
//     </Wrapper>
//   );
// };

// export default MyBar;
