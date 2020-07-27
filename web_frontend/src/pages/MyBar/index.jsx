import React from "react";
import Layout from "../../layout/";

import { Grid } from "@material-ui/core";

import { Button, Pagination } from "react-bootstrap";
import Wrapper from "./styles";

const MyBar = () => {
  return (
    <Layout>
      <Wrapper>
        <Grid className="narebarLogo">
          {/* <img src="" alt="narebarLogo" /> */}
          <h1>NaReBar</h1>
        </Grid>

        <Grid
          container
          justify="center"
          alignItems="center"
          spacing={4}
          className="mybarHeader"
        >
          <Grid item className="Community">
            <Button variant="secondary">Community</Button>{" "}
          </Grid>
          <Grid item className="MyBar">
            <Button variant="dark">MyBar</Button>{" "}
          </Grid>
        </Grid>

        <Grid container justify="flex-end" className="sync">
          <Button variant="light" size="sm">
            Sync
          </Button>{" "}
        </Grid>

        <Grid container className="recipe">
          <Grid item xs={12} className="recipeImage">
            <img
              src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/tpupvr1478251697.jpg"
              alt="recipeImage"
            ></img>
          </Grid>
          <Grid item xs={12} className="recipeDetail">
            <h3>recipeDetail</h3>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              elementum vulputate libero et laoreet. Curabitur et turpis
              posuere, blandit elit eu, commodo enim. Duis rutrum mollis ipsum
              tempus semper. Maecenas quis rhoncus neque. Proin porta hendrerit
              massa, non dictum dui dictum a. Vivamus porta est gravida velit
              malesuada fermentum. Nam dui lorem, commodo tincidunt tempor
              vitae, convallis ut quam. Donec eget viverra urna, nec tempor dui.
              Morbi eleifend massa a ullamcorper placerat. Vestibulum congue
              sagittis urna ut accumsan.
            </p>
            <hr />
          </Grid>
        </Grid>

        <Grid container justify="center" className="pagination">
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </Grid>
      </Wrapper>
    </Layout>
  );
};

export default MyBar;
