import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${cores.cinzaClaro};
  height: 298px;
  padding-bottom: 40px;

  .container {
    position: relative;
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
export const ContainerRedesSociais = styled.div`
  display: flex;

  a {
    margin-right: 8px;

    img {
      max-width: 24px;
      max-height: 24px;
    }
  }
`

export const Texto = styled.p`
  margin-top: 80px;
  font-size: 10px;
  font-weight: 400;
  text-align: center;
`
