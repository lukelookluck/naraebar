import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import Wrapper from "./styles";
import { Grid } from "@material-ui/core";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';

const NavigationTab = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Wrapper>
            <Grid container justify="center" alignItems="center">
                <Grid item xs={10}>
                    <Tabs variant="fullWidth" indicatorColor="primary" textColor="primary" className="navTabs" value={value} onChange={handleChange} >
                        <Tab className="myTab" label="커뮤니티" component={Link} to="/Community"></Tab>
                        <Tab className="myTab" label="마이바" component={Link} to="/MyBar"></Tab>
                    </Tabs>
                </Grid>
            </Grid>
        </Wrapper>
    );
};

export default NavigationTab;