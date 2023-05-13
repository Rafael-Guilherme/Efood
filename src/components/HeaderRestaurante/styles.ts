import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  color: ${cores.rosa};

  .container {
    width: 539px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 125px;
      height: 56px;
      margin-top: 40px;
    }
  }
`
export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* justify-content: space-evenly; */
  height: 186px;

  img {
    margin-left: 341px;
    margin-right: 193px;
  }
`
export const Banner = styled.div`
  position: relative;
  height: 280px;

  img {
    width: 100%;
    height: 280px;
    position: relative;
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2;
  }
`
export const Titles = styled.div`
  position: absolute;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  top: 20px;
  left: 210px;
  color: ${cores.branca};
  z-index: 5;

  p {
    font-weight: 100;
  }
`
