import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

`
export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 1024px;
  height: 186px;

  img {
    width: 125px;
    height: 56px;
    margin-left: 341px;
    margin-right: 193px;
  }

  div {
    cursor: pointer;
  }
`

export const LinkHeader = styled(Link)`
  color: ${cores.rosa};
`

export const Banner = styled.div`
  position: relative;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`
export const Titles = styled.div`
  position: absolute;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 32px;

  top: 20px;
  left: 160px;
  color: ${cores.branca};
  z-index: 1;

  p {
    font-weight: 100;
  }

  h2 {
    font-weight: 900;
  }
`
