import styled from 'styled-components'
import { cores } from '../../styles'

export const Modal = styled.div`
  background-color: ${cores.rosa};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1024px;
  height: 344px;
  z-index: 6;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  img {
    max-width: 280px;
    width: 100%;
    height: 280px;
  }
`
export const CloseButton = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  z-index: 7;
  top: 0;
  right: 0;
  font-size: 16px;
  padding: 8px;
  color: ${cores.branca};
  cursor: pointer;
`

export const Overlay = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  padding: 32px;
  color: ${cores.branca};
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: 900;
`

export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin: 16px 0;
`

export const BotaoCarrinho = styled.button`
  background-color: ${cores.branca};
  display: inline-block;
  border: none;
  cursor: pointer;
  width: 250px;
  height: 24px;
  color: ${cores.rosa};
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
`
