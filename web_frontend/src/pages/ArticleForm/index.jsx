import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Wrapper from "./style";

import CloseIcon from "@material-ui/icons/Close";
import Uploadbtn from "../../components/Community/UploadButton/";

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
      <Grid>
        <goBackBtn />
        <div className="form-box">
          <div className="form-header">
            <div className="form-header">
              {/* <Link to="/Community"> */}
              <CloseIcon fontSize="large" onClick={goBack} />
              {/* </Link> */}
              <p className="form-header-title">글 쓰기</p>
            </div>
            <button className="article-create-button">작성완료</button>
          </div>
          <form class="text-left">
            <div class="form-group mb-2">
              <input
                class="form-control"
                aria-describedby="titleHelp"
                placeholder="제목"
                v-model="articleData.title"
              />
            </div>
            <b-input-group>
              <b-form-rating
                v-model="selected_movie.rate_value"
                color="#ff8800"
                size="lg"
                required
                no-border
              ></b-form-rating>
            </b-input-group>
            <div class="form-group mb-2">
              <textarea
                class="form-control form-textarea"
                placeholder="여기를 눌러 내용을 입력하세요."
                // rows="21"
                v-model="articleData.content"
              ></textarea>
            </div>
            <Uploadbtn />
          </form>
        </div>
      </Grid>
    </Wrapper>
  );
};
export default ArticleForm;
