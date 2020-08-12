import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Grid, Button, TextField } from "@material-ui/core";
import axios from "axios";

import Wrapper from "./style";
import Header from "../../layout/Header/";

import CloseIcon from "@material-ui/icons/Close";
import ImageUploadBtn from "../../components/Community/ArticleForm/ImageUploadButton/";

import Temp1 from "../../components/Community/Temp1/";
import { CommonContext } from "../../context/CommonContext";

export default function (props) {
  const [articleFormData, setArticleFormData] = useState({
    id: null,
    title: "",
    detail: "",
    name: "",
    ingredients: "레몬",
    user: 1,
  });

  function refreshList() {
    if (props.location.state) {
      const article = props.location.state.article;
      setArticleFormData({
        ...articleFormData,
        id: article.id,
        title: article.title,
        detail: article.detail,
        name: article.title,
      });
    }
  }

  const { serverUrl, user } = useContext(CommonContext);

  function goBack() {
    props.history.goBack();
  }

  useEffect(() => {
    refreshList();
  }, []);

  useEffect(() => {
    const unblock = props.history.block((location, action) => {
      if (action === "POP") {
        if (window.confirm("작성하던 내용이 없어집니다. 정말 떠나실건가요?")) {
          return true;
        } else {
          return false;
        }
      }
    });
    return () => {
      unblock();
    };
  }, [props.history]);

  // function yerOrNo() {
  //   if
  // }

  function handleSubmit(data) {
    // console.log(data);
    if (data.id) {
      console.log(data);
      axios
        .put(`${serverUrl}/community/${data.id}/`, data, {
          headers: {
            Authorization: `JWT ${user.token}`,
          },
        })
        .then((res) => {
          // console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      return;
    }
    axios
      .post(`${serverUrl}/community/`, data, {
        headers: {
          Authorization: `JWT ${user.token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Wrapper>
      <Header></Header>
      <Grid container className="root" justify="center" alignItems="center">
        <Grid item xs={12} className="form-header-title">
          <div>나만의 레시피 만들기</div>
          <p>
            id: {articleFormData.id}
            title: {articleFormData.title}
            detail: {articleFormData.detail}
            name: {articleFormData.name}
            user: {articleFormData.user}
            ingredients: {articleFormData.ingredients}
          </p>
        </Grid>
        {/* <div className="form-header">
            <Link to="/Community">
            <CloseIcon fontSize="large" onClick={goBack} />
            </Link>
            <p className="form-header-title">글 쓰기</p>
          </div> */}

        <Grid item xs={10}>
          <form>
            <div>
              <TextField
                required
                fullWidth
                id="name"
                label="칵테일 이름"
                variant="outlined"
                autoFocus
                value={articleFormData.title}
                onChange={({ target: { value } }) =>
                  setArticleFormData({ ...articleFormData, title: value })
                }
              ></TextField>
            </div>
            {/* {a.a} */}
            <div>
              <TextField
                required
                fullWidth
                id="details"
                label="칵테일 소개"
                multiline
                rows={4}
                variant="outlined"
                value={articleFormData.detail}
                onChange={({ target: { value } }) =>
                  setArticleFormData({
                    ...articleFormData,
                    detail: value,
                    name: value,
                  })
                }
              ></TextField>
            </div>

            <Temp1 />
            <ImageUploadBtn />

            {/* <button className="article-create-button">작성완료</button> */}
            <Grid container justify="center" alignItems="center">
              <Grid item xs={6}>
                <Link
                  className="more-comment"
                  to={{
                    pathname: "/Main",
                  }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    className="article-create-button"
                    onClick={() => {
                      handleSubmit(articleFormData);
                    }}
                  >
                    공유하기
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Button type="reset" variant="contained" className="resetBtn">
                  다시 입력
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Wrapper>
  );
}
