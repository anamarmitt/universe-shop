import styled from "styled-components";

export const GalaxyStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  height: 1px;
  width: 1px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: -24vw -44vh 2px 2px #fff, 38vw -4vh 0px 0px #fff,
    -20vw -48vh 1px 2px #fff, -39vw 38vh 3px 1px #fff, -42vw -11vh 0px 3px #fff,
    12vw 15vh 3px 3px #fff, 42vw 6vh 3px 2px #fff, -8vw 9vh 0px 2px #fff,
    34vw -38vh 1px 0px #fff, -17vw 45vh 3px 1px #fff, 22vw -36vh 3px 2px #fff,
    -42vw 1vh 1px 0px #fff;
  animation: zoom 8s alternate infinite;

  @keyframes zoom {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.8);
    }
  }
`;
