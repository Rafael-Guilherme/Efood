import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

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
export const Titulo = styled.h1`
  font-weight: 900;
  font-size: 36px;
  color: ${cores.rosa};
  text-align: center;
  margin-top: 136px;
  margin-bottom: 40px;
`
