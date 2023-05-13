import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  position: relative;
  color: ${cores.rosa};
  max-width: 472px;
  width: 100%;
  height: 398px;
  margin-bottom: 40px;

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const InfoCard = styled.div`
  padding: 8px;
  margin-top: -4px;
  border-width: 0 1px 1px 1px;
  border-style: solid;
  border-color: ${cores.rosa}
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: block;
  margin-top: 8px;
  margin-bottom: 16px;
`
export const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Grade = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-right: 8px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-bottom: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
