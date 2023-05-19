import styled  from "styled-components";
import { cores } from "../../styles";


export const CardRestaurant = styled.div`
  position: relative;
  background-color: ${cores.rosa};
  color: ${cores.branca};
  max-width: 320px;
  width: 100%;
  height: 330px;
  margin-bottom: 32px;
  padding: 8px;

  img {
    max-width: 304px;
    width: 100%;
    max-height: 167px;
  }
`
export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin-top: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400px;
  margin: 8px 0;
`

export const Botao = styled.button`
  font-size: 14px;
  font-weight: 700;
  width: 304px;
  height: 24px;
  margin-top: 8px;
  color: ${cores.rosa};
  border: none;
  background-color: ${cores.branca} ;
  text-align: center;
  cursor: pointer;
`
