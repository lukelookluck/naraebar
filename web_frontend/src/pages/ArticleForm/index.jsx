import React, { useEffect, useState } from "react";
import { Grid, Button, TextField } from "@material-ui/core";
import axios from "axios";

import Wrapper from "./style";
import Header from "../../layout/Header/";

import CloseIcon from "@material-ui/icons/Close";
import ImageUploadBtn from "../../components/Community/ArticleForm/ImageUploadButton/";

import Temp1 from "../../components/Community/Temp1/";
// import { Grid, IconButton, Grow, makeStyles } from "@material-ui/core";
// import { CloseIcon, PhotoCameraIcon  } from "@material-ui/icons";

export default function ({ history }) {
  // console.log(history);

  const goBack = () => {
    history.goBack();
  };

  useEffect(() => {
    console.log(history);
    const unblock = history.block(
      "작성하던 내용이 없어집니다. 정말 떠나실건가요?"
    );
    return () => {
      unblock();
    };
  }, [history]);

  const [articleFormData, setArticleFormData] = useState({
    title: "",
    detail: "",
    name: "",
    ingredients: "레몬",
    user: 1,
  });

  function handleSubmit(data) {
    console.log(data);
    axios
      .post("http://192.168.0.4:8100/community/", data, {
        // headers: {
        //     Authorization: `JWT ${localStorage.getItem("token")}`,
        //   },
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
                <Button
                  // type="submit"
                  variant="contained"
                  className="article-create-button"
                  onClick={() => handleSubmit(articleFormData)}
                >
                  공유하기
                </Button>
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
