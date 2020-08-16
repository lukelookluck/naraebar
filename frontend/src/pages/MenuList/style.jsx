import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;

  & .cocktailimg {
      width:700px;
      height:700px;
  }

  & .caro {
    margin-top: 35px;
  }

& .carousel-control-prev-icon,
& .carousel-control-next-icon {
  height: 100px;
  width: 100px;
  outline: rgb(56, 97, 149);
  background-size: 100%, 100%;
  border-radius: 50%;
  border: 6px solid rgb(56, 97, 149);
  background-image: none;
}

& .carousel-control-next-icon {
  margin-right: 30px;
}

& .carousel-control-prev-icon {
  margin-left: 30px;
}

& .carousel-control-next-icon:after
{
  content: '>';
  font-size: 55px;
  color: rgb(56, 97, 149);
}

& .carousel-control-prev-icon:after {
  content: '<';
  font-size: 55px;
  color: rgb(56, 97, 149);
}

& h1 {
  font-weight: bold;
  font-size: 70px;
  margin-bottom: 0px;
  padding-bottom: 0px;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  font-family: 'IBMPlexSansKR-Text';
}

& p {
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  font-size: 40px;
  font-weight: 600;
  font-family: 'IBMPlexSansKR-Text';
  margin-top: 0px;
  padding-top: 0px;
}

& .carousel-caption {
  background-color: rgba( 255, 255, 255, 0.5 );
  width: 630px;
  border-radius: 20px;
  right: 0%;
  left: 0%;
  margin-left: 195px;
};

& .caroitem {
  text-align: center;
}
`;

export default Wrapper;
