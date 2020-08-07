import React, { useEffect } from "react";
import { Grid, Button, TextField } from "@material-ui/core";
import Wrapper from "./style";
import Header from "../../layout/Header/";

import CloseIcon from "@material-ui/icons/Close";
import ImageUploadBtn from "../../components/Community/ArticleForm/ImageUploadButton/";

import Temp1 from "../../components/Community/Temp1/";
// import { Grid, IconButton, Grow, makeStyles } from "@material-ui/core";
// import { CloseIcon, PhotoCameraIcon  } from "@material-ui/icons";

const ArticleForm = ({ history }) => {
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

  return (
    <Wrapper>
      <Header></Header>
      <Grid container className="root" justify="center" alignItems="center">
        <Grid item xs={12} className="form-header-title">
          <div>나만의 레시피 만들기</div>
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
              ></TextField>
            </div>

            <div>
              <TextField
                required
                fullWidth
                id="details"
                label="칵테일 소개"
                multiline
                rows={4}
                variant="outlined"
              ></TextField>
            </div>

            <Temp1 />
            <ImageUploadBtn />

            {/* <button className="article-create-button">작성완료</button> */}
            <Grid container justify="center" alignItems="center">
              <Grid item xs={6}>
                <Button
                  type="submit"
                  variant="contained"
                  className="article-create-button"
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
};
export default ArticleForm;
