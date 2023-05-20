import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

import lixeira from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const SideBar = styled.aside`
  background-color: ${cores.rosa};
  z-index: 1;
  max-width: 360px;
  width: 100%;
  padding: 32px 8px 0 8px;

  ${ButtonContainer} {
    background-color: ${cores.branca};
    border-radius: 0;
    color: ${cores.rosa};
    font-size: 14px;
    font-weight: bold;
    max-width: 100%;
    width: 100%;
  }
`

export const Prices = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: bold;
  color: ${cores.branca};
  margin-top: 40px;
  margin-bottom: 16px;
`
export const CartItem = styled.li`
  position: relative;
  display: flex;
  background-color: ${cores.branca};
  width: 344px;
  height: 100px;
  padding: 8px 0px 12px 8px;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    color: ${cores.rosa};
    margin-bottom: 16px;
  }

  span {
    display: block;
    font-size: 14px;
    color: ${cores.rosa};
    margin-bottom: 32px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`
