import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import mojito from '../static/images/cocktail/mojito2.png';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    maxWidth: 1700,
    height: 600,
    borderRadius: 25,
  },
  media: {
    height: 500,
    width: 500,
    // padding: "10.25%", // 16:9
  },
  body: {
    // flex: "auto",
    display: 'flex',
    alignItems: 'center',
    fontSize: '5rm',
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <div class="mb-5 d-flex justify-content-center">
      <Card className={classes.root} variant="outlined">
        <img className={classes.media} src={mojito} alt="" height="300" />
        {/* <CardMedia
          className={classes.media}
          image={mojito}
          title="Paella dish"
          height="140 "
        /> */}
        <CardContent className={classes.body}>
          <Typography variant="body2" color="textSecondary" component="p">
            <h1>
              럼 - 45ml 민트 잎 - 4~5장(국제 바텐더 협회 IBA 기준으로는 3장)
              설탕 - 2tsp 라임 - 1/2개 탄산수 - 적당량
            </h1>
            <h1>
              라임 즙, 쥬스를 넣은 글라스에 설탕과 민트 잎을 넣고 찧는다. 이후
              잘게 부순 얼음과 럼을 글라스에 넣고 잘 섞어준 뒤, 나머지를
              탄산수로 채운다. 취향에 따라 라임 조각, 민트 잎, 줄기 등을
              곁들인다.
            </h1>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
