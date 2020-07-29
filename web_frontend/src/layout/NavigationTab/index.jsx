import React from "react";
import { useHistory, Link } from "react-router-dom";
import Wrapper from "./styles";
import { Grid } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// import AppBar from "@material-ui/core/AppBar";

const NavigationTab = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // setState(newValue);
    console.log("killlllllllll");
  };

  return (
    <Wrapper>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12}>
          <Tabs
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            className="navTabs"
            value={value}
            onChange={handleChange}
          >
            <Tab
              className="myTab"
              label="Community"
              component={Link}
              to="/Community"
            ></Tab>
            <Tab
              className="myTab"
              label="MyBar"
              component={Link}
              to="/MyBar"
            ></Tab>
          </Tabs>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default NavigationTab;

// import React from "react";
// import { useHistory, Link } from "react-router-dom";
// import Wrapper from "./styles";
// import { Grid } from "@material-ui/core";

// import PropTypes from "prop-types";
// import SwipeableViews from "react-swipeable-views";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`full-width-tabpanel-${index}`}
//       aria-labelledby={`full-width-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={2}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `full-width-tab-${index}`,
//     "aria-controls": `full-width-tabpanel-${index}`,
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: theme.palette.background.paper,
//     width: 500,
//   },
// }));

// export default function FullWidthTabs() {
//   const classes = useStyles();
//   const theme = useTheme();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index) => {
//     setValue(index);
//   };

//   return (
//     <Wrapper className={classes.root}>
//       <Grid container justify="center" alignItems="center">
//         <AppBar position="static" color="default">
//           <Tabs
//             value={value}
//             onChange={handleChange}
//             indicatorColor="primary"
//             textColor="primary"
//             variant="fullWidth"
//           >
//             <Tab label="Community" {...a11yProps(0)} />
//             <Tab label="MyBar" {...a11yProps(1)} />
//           </Tabs>
//         </AppBar>
//         <SwipeableViews
//           axis={theme.direction === "rtl" ? "x-reverse" : "x"}
//           index={value}
//           onChangeIndex={handleChangeIndex}
//         >
//           <TabPanel value={value} index={0} dir={theme.direction}>
//             Item One
//           </TabPanel>
//           <TabPanel value={value} index={1} dir={theme.direction}>
//             Item Two
//           </TabPanel>
//         </SwipeableViews>
//       </Grid>
//     </Wrapper>
//   );
// }
