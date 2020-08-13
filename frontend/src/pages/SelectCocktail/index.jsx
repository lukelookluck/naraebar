import React, { useState, useContext, useEffect, Fragment } from 'react';
import Layout from '../../layout/';
import Wrapper from './style';
import { useHistory } from 'react-router-dom';
import { Grid, Button } from "@material-ui/core";
import { CommonContext } from "../../context/CommonContext";
import axios from "axios";

const SelectCocktail = ({ match }) => {

  let history = useHistory();

  const onClickRedirectPathHandler = name => e => {

    // 여기 뭔가 아두이노나 라즈베리파이한테 만들어!라는 명령을 주는게 와야할 듯

    history.push(name);
  };

  const [menuList, setMenuList] = useState([]);
  const { serverUrl } = useContext(CommonContext);

  function refreshList() {
    axios
      .get(`/bartender/recipe`, {
        headers: {
          'Access-Control-Allow-Origin' : '*'
        },
      })
      .then((res) => {
        console.log(res.data);
        setMenuList(res.data);
      })
      .catch((err) => console.log(err + "왜 에러가 난걸까"));
  }

  useEffect(() => {
    refreshList();
  }, []);

  var index = menuList.findIndex(item => item.id == match.params.cocktailId);

  const MyCocktail = menuList[index];

  // const igrList = MyCocktail.ingredients.map((item) => {
  //   return (
  //     <Grid item xs>
  //       <div className="itemdiv">{item.strIngredient}</div>
  //       <div className="itemdiv">{item.strMeasure} ml</div>
  //     </Grid>
  //   );
  // });

  function igrList () {
    return (
      <Fragment>
        {
          MyCocktail.strIngredient1 != "null" 
          ? (<Grid item xs><div className="itemdiv">{MyCocktail.strIngredient1}</div><div className="itemdiv">{MyCocktail.strMeasure1} ml</div></Grid>) 
          : (<div></div>)
        }
        {
          MyCocktail.strIngredient2 != "null"
          ? (<Grid item xs><div className="itemdiv">{MyCocktail.strIngredient2}</div><div className="itemdiv">{MyCocktail.strMeasure2} ml</div></Grid>) 
          : (<div></div>)
        }
        {
          MyCocktail.strIngredient3 != "null" 
          ? (<Grid item xs><div className="itemdiv">{MyCocktail.strIngredient3}</div><div className="itemdiv">{MyCocktail.strMeasure3} ml</div></Grid>) 
          : (<div></div>)
        }
        {
          MyCocktail.strIngredient4 != "null"
          ? (<Grid item xs><div className="itemdiv">{MyCocktail.strIngredient4}</div><div className="itemdiv">{MyCocktail.strMeasure4} ml</div></Grid>) 
          : (<div></div>)
        }
        {
          MyCocktail.strIngredient5 != "null" 
          ? (<Grid item xs><div className="itemdiv">{MyCocktail.strIngredient5}</div><div className="itemdiv">{MyCocktail.strMeasure5} ml</div></Grid>) 
          : (<div></div>)
        }
        {
          MyCocktail.strIngredient6 != "null" 
          ? (<Grid item xs><div className="itemdiv">{MyCocktail.strIngredient6}</div><div className="itemdiv">{MyCocktail.strMeasure6} ml</div></Grid>) 
          : (<div></div>)
        }
      </Fragment>
    );
  };

  return (
    <Layout>
      <Wrapper>
        {
          MyCocktail ? (<Grid container justify="center" alignItems="center">
          <Grid item xs={6} className="imgGrid">
            <img src={MyCocktail.imgDrink} alt={MyCocktail.strDrink} className="cocktailImg"></img>
          </Grid>
          <Grid item xs={6} className="textGrid">
            <Grid className="titleGrid">
              <h1>" {MyCocktail.strDrink} "</h1>
              <h2>{MyCocktail.strInstructions}</h2>
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
              {igrList()}
            </Grid>
            <Grid className="btnGrid">
              <Button className="btnSelect" variant="contained" onClick={onClickRedirectPathHandler("/MakingCocktail")}>선택</Button>
              <Button className="btnCancel" variant="contained" onClick={onClickRedirectPathHandler("/MenuList")}>취소</Button>
            </Grid>
          </Grid>
        </Grid>) : (<div></div>)
        }
      </Wrapper>
    </Layout>
  );
};

export default SelectCocktail;
