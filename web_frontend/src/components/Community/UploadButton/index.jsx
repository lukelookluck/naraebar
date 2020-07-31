import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

import Wrapper from "./style";
import Temp1 from "../Temp1/";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

export default function UploadButtons() {
  const classes = useStyles();
  const [imgBase64, setImgBase64] = useState([]); // 파일 base64
  const [imgFile, setImgFile] = useState(null); //파일

  const handleChangeFile = (event) => {
    for (let i = 0; i < event.target.files.length; i++) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[i]); // 1. 파일을 읽어 버퍼에 저장
      setImgFile(event.target.files); // 파일 상태 업데이트
      console.log(event.target.files.length);

      reader.onloadend = () => {
        // 2. 읽기가 완료되면
        console.log(reader);
        const base64 = reader.result;
        console.log(base64);
        setImgBase64((imgBase64) => [
          ...imgBase64,
          { id: imgBase64.length, value: base64.toString() },
        ]); // 파일 base64 상태 업데이트

        console.log("imgBase64", imgBase64);
      };
    }
  };

  const inputImage = imgBase64.map((item) => {
    return <img className="input-image" src={item.value} alt="" />;
  });

  return (
    <Wrapper>
      {/* <div className="input-image-box">{inputImage}</div> */}
      <Temp1 temp={imgBase64} />
      <div className="input-footer">
        <input
          accept="image/*"
          className={classes.input}
          id="icon-button-file"
          type="file"
          multiple
          onChange={handleChangeFile}
        />
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera fontSize="large" />
          </IconButton>
        </label>
      </div>
    </Wrapper>
  );
}
