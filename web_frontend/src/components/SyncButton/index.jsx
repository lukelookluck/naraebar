import React, { useState, useEffect, Fragment, useContext } from "react";
import Wrapper from "./style";
import { Grid, Button } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import axios from "axios";
import { CommonContext } from "../../context/CommonContext";

const SyncButton = () => {
  const { serverUrl, user } = useContext(CommonContext);
  const [menuList, setMenuList] = useState([]);

  const handleSync = () => {
    try {
      // 연동
      // axios
      // .get(`${serverUrl}/sync/${user.user.id}/`,
      //   { user: user.user.id },
      //   {headers: {
      //     Authorization: `JWT ${user.token}`,
      //   },
      // })
      // .then((res) => {
      //   console.log(res.data);
      //   setMenuList(res.data.save_articles);
      //   console.log(menuList);
      // })
      // .catch((err) => console.log(err + " 에러났음"));
      alert("동기화 성공");
    } catch (e) {
      alert("네트워크 연결에 문제가 있어 레시피 목록 동기화에 실패했습니다.");
    }
  };

  return (
    <Wrapper>
      <Grid className="custom-control custom-switch">
        <Button
          variant="contained"
          className="btn"
          endIcon={<Icon>send</Icon>}
          onClick={handleSync}
        >
          레시피 동기화
        </Button>
      </Grid>
    </Wrapper>
  );
};

export default SyncButton;
