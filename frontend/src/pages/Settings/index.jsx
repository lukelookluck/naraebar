import React, { useEffect, useState } from 'react';
import Layout from '../../layout/';
import Wrapper from './styles';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import '../../index.css';

const Settings = () => {

    let history = useHistory();

    const onClickRedirectPathHandler = name => e => {
        history.push(name);
    };

    const [bottleList, setBottleList] = useState([]);

    function refreshList() {
        axios
            .get(`/bartender/bottle`, {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },

            })
            .then((res) => {
                console.log(res.data);
                setBottleList(res.data);
            })
            .catch((err) => console.log(err + " 에러났음"));
    }

    useEffect(() => {
        refreshList();
    }, []);


    const nozzles = bottleList.map((item) => {
        return (
            <Grid item xs={3} key={item.id}>
                {
                    item.volume === 0
                        ? (<Grid item xs={3}>
                            <img src={`images/empty_bottle/empty_bottle_icon_${item.nozzle}.png`} alt={item.name} className="botimg" onClick={onClickRedirectPathHandler('/SetBottle/' + item.nozzle)}></img>
                        </Grid>)
                        : (<Grid item xs={3}>
                            <img src={`images/full_bottle/full_bottle_icon_${item.nozzle}.png`} alt={item.name} className="botimg"></img>
                        </Grid>)
                }
            </Grid>
        );
    });

    return (
        <Layout>
            <Wrapper>
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={12}>
                        <ArrowBackRoundedIcon onClick={onClickRedirectPathHandler('/Start')} className="back"></ArrowBackRoundedIcon>
                    </Grid>
                    <Grid container justify="center" alignItems="center">
                        {nozzles}
                    </Grid>
                </Grid>
            </Wrapper>
        </Layout>
    );
};

export default Settings;
