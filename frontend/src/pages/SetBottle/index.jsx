import React, { useEffect, useState, Fragment } from 'react';
import Layout from '../../layout/';
import Wrapper from './styles';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import '../../index.css';

const SetBottle = ({ match }) => {
    let history = useHistory();

    const onClickRedirectPathHandler = name => e => {
        history.push(name);
    };

    return (
        <Layout>
            <Wrapper>
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={12}>
                        <ArrowBackRoundedIcon
                            onClick={onClickRedirectPathHandler('/Settings')}
                            className="back"
                        ></ArrowBackRoundedIcon>
                    </Grid>
                    <Grid item xs={6}>
                        <img
                            src={require(`./images/empty_bottle/empty_bottle_icon_${match.params.nozzle}.png`)}
                            className="botimg"
                        />
                        {/* {/* <img
              src={`./images/empty_bottle/empty_bottle_icon_${match.params.nozzle}.png`}
              className="botimg" / */}
                    </Grid>
                    <Grid item xs={6}>
                        <Grid>
                            <h1>노즐 정보 입력</h1>
                            {/* <form>
                                <div>
                                    <TextField required fullWidth id="id" label="아이디" variant="outlined" autoFocus></TextField>
                                </div>
                                <div>
                                    <TextField required fullWidth id="pw" label="비밀번호" variant="outlined" type="password" ></TextField>
                                </div>
                                <div>
                                    <TextField required fullWidth id="name" label="닉네임" variant="outlined" ></TextField>
                                </div>
                                <div>
                                    <TextField required fullWidth id="deviceNum" label="기기번호" variant="outlined" ></TextField>
                                </div>
                                <Grid container justify="center" alignItems="center">
                                    <Grid item xs={6}>
                                        <Button type="submit" variant="contained" className="submitBtn">등록</Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button type="reset" variant="contained" className="resetBtn">다시 입력</Button>
                                    </Grid>
                                </Grid>
                            </form> */}
                        </Grid>
                    </Grid>
                </Grid>
            </Wrapper>
        </Layout>
    );
};

export default SetBottle;
