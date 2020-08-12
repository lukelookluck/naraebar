import React, { useState, useContext, useEffect } from 'react';
import Layout from '../../layout/';
import Wrapper from './style';
import { useHistory } from 'react-router-dom';
import { Grid, Button } from "@material-ui/core";
import { CommonContext } from "../../context/CommonContext";
import axios from "axios";
// import dumpfile from '../dump.json';

const SelectCocktail = ({ match }) => {

  let history = useHistory();

  const onClickRedirectPathHandler = name => e => {

    // 여기 뭔가 아두이노나 라즈베리파이한테 만들어!라는 명령을 주는게 와야할 듯

    history.push(name);
  };

  // const Cocktails = dumpfile;
  const [menuList, setMenuList] = useState([]);
  const { serverUrl } = useContext(CommonContext);

  function refreshList() {
    axios
      .get(`${serverUrl}/bartender/recipe`, {
        // headers: {
        //   Authorization: `JWT ${user.token}`,
        // },
      })
      .then((res) => {
        console.log(res.data);
        setMenuList(res.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    refreshList();
  }, []);

  var index = menuList.findIndex(item => item.id == match.params.cocktailId);

  const MyCocktail = menuList[index];

  const igrList = MyCocktail.ingredients.map((item) => {
    return (
      <Grid item xs>
        <div className="itemdiv">{item.igrname}</div>
        <div className="itemdiv">{item.amount} ml</div>
      </Grid>
    );
  });

  return (
    <Layout>
      <Wrapper>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={6} className="imgGrid">
            <img src={MyCocktail.img} alt={MyCocktail.name} className="cocktailImg"></img>
          </Grid>
          <Grid item xs={6} className="textGrid">
            <Grid className="titleGrid">
              <h1>" {MyCocktail.name} "</h1>
              <h2>{MyCocktail.details}</h2>
              <hr style={{
                color: '#000000',
                backgroundColor: '#000000',
                height: .8,
                borderColor: '#000000',
                width: '80%',
                marginLeft: '10%'
              }} />
              <h3>레시피</h3>
            </Grid>
            <Grid container className="igrGrid">
              {igrList}
            </Grid>
            <Grid className="btnGrid">
              <Button className="btnSelect" variant="contained" onClick={onClickRedirectPathHandler("/MakingCocktail")}>선택</Button>
              <Button className="btnCancel" variant="contained" onClick={onClickRedirectPathHandler("/MenuList")}>취소</Button>
            </Grid>
          </Grid>
        </Grid>
      </Wrapper>
    </Layout>
  );
};

export default SelectCocktail;
