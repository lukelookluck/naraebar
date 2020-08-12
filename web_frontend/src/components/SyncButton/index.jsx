import React from "react";
import Wrapper from "./style";
import { Grid, Button } from "@material-ui/core";
import Icon from '@material-ui/core/Icon';

const SyncButton = () => {

  const handleSync = () => {
    try {
        // 연동하라는 어떤 신호를 보내겠지


        console.log("동기화버튼 클릭");
        alert('동기화 성공');
    } catch (e) {
        alert('네트워크 연결에 문제가 있어 레시피 목록 동기화에 실패했습니다.');
    }
};

  return (
    <Wrapper>
      <Grid className="custom-control custom-switch">
        <Button variant="contained" className="btn" endIcon={<Icon>send</Icon>} onClick={handleSync}>레시피 동기화</Button>
      </Grid>
    </Wrapper>
  );
};

export default SyncButton;
