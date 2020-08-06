import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;

  & .cocktailimg {
      width:1000px;
      height:650px;
  }

  & .caro {
    margin-top: 50px;
  }

& .carousel-control-prev-icon,
& .carousel-control-next-icon {
  height: 100px;
  width: 100px;
  outline: black;
  background-size: 100%, 100%;
  border-radius: 50%;
  border: 2px solid black;
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
  color: black;
}

& .carousel-control-prev-icon:after {
  content: '<';
  font-size: 55px;
  color: black;
}

& h1 {
  font-weight: bold;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  font-family: 'IBMPlexSansKR-Text';
}

& p {
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  font-size: 25px;
  font-weight: 600;
  font-family: 'IBMPlexSansKR-Text';
}

& .carousel-caption {
  background-color: rgba( 255, 255, 255, 0.5 );
  width: 800px;
  border-radius: 20px;
  right: 0%;
  left: 0%;
  margin-left: 367px;
};

& .caroitem {
  text-align: center;
}
`;

export default Wrapper;
