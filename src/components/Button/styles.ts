import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  background-color: transparent;
  border: 2px solid ${cores.branca};
  color: ${cores.branca};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
`

export const ButtonLink = styled(Link)`
  background-color: ${cores.rosa};
  color: ${cores.branca};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
`
