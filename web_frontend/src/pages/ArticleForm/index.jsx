import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Wrapper from "./style";
import Header from "../../layout/Header/";

import CloseIcon from "@material-ui/icons/Close";
import ImageUploadBtn from "../../components/Community/ImageUploadButton/";

import Temp1 from "../../components/Community/Temp1/";
// import { Grid, IconButton, Grow, makeStyles } from "@material-ui/core";
// import { CloseIcon, PhotoCameraIcon  } from "@material-ui/icons";

const ArticleForm = ({ history }) => {
  const goBack = () => {
    history.goBack();
  };
  useEffect(() => {
    console.log(history);
    const unblock = history.block("정말 떠나실건가요?");
    return () => {
      unblock();
    };
  }, [history]);

  return (
    <Wrapper>
      <Header></Header>
      <Grid container className="root" justify="center" alignItems="center">
        <Grid item xs={12} className="form-header-title">
          <div>글 쓰기</div>
        </Grid>
        {/* <div className="form-header">
            <Link to="/Community">
            <CloseIcon fontSize="large" onClick={goBack} />
            </Link>
            <p className="form-header-title">글 쓰기</p>
          </div> */}
        <form>
          <div class="form-group mb-2">
            <input
              class="form-control"
              aria-describedby="titleHelp"
              placeholder="음료 레시피 이름"
            />
          </div>
          <div class="form-group mb-2">
            <textarea
              class="form-control form-textarea"
              placeholder="여기를 눌러 음료소개를 입력하세요."
            // rows="21"
            ></textarea>
          </div>
          <div class="form-row mb-2">
            <div className="col">
              <input
                class="form-control"
                placeholder="재료명"
              // rows="21"
              ></input>
            </div>
            <div className="col">
              <input
                class="form-control"
                placeholder="용량(ml)"
              // rows="21"
              ></input>
            </div>
          </div>
          <Temp1 />
          <ImageUploadBtn />
          <button className="article-create-button">작성완료</button>
        </form>
      </Grid>
    </Wrapper>
  );
};
export default ArticleForm;
