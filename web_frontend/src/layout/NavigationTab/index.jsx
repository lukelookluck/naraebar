import React from "react";
import { useHistory, Link } from "react-router-dom";
import Wrapper from "./styles";
import { Grid } from "@material-ui/core";

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Community from "../../pages/Community/";
import MyBar from "../../pages/MyBar/";

import Portal from "@material-ui/core/Portal";

import CreateArticleButton from "../../components/Community/ArticleForm/CreateArticleButton/";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: 'white'
    backgroundColor: theme.palette.background.paper,
    // width: 500,
  },
}));

export default function NavigationTab() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Wrapper className={classes.root}>
      <Grid container justify="center" alignItems="center" class="asd">
        <AppBar className="myAppbar" position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            className="navTabs"
          >
            <Tab
              /* component={Link} to="/Community" */ label="Community"
              {...a11yProps(0)}
            />
            <Tab
              /* component={Link} to="/MyBar" */ label="MyBar"
              {...a11yProps(1)}
            />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
          class="asdas"
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Community></Community>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <MyBar></MyBar>
          </TabPanel>
        </SwipeableViews>
        <CreateArticleButton />
      </Grid>
    </Wrapper>
  );
}
