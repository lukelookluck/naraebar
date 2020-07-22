import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import UndoIcon from "@material-ui/icons/Undo";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const useStyles = makeStyles({
  root: {
    width: "auto",
    display: "flex",
    justifyContent: "around",
    backgroundColor: "#282c34",
  },
  item: {
    backgroundColor: "white",
    paddingLeft: 100,
    paddingRight: 100,
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 25,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div class="d-flex justify-content-center ">
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          className={classes.item}
          label="SELECT"
          icon={<CheckBoxIcon />}
        />
        <BottomNavigationAction
          className={classes.item}
          label="BACK"
          icon={<UndoIcon />}
        />
        {/* <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /> */}
      </BottomNavigation>
    </div>
  );
}
