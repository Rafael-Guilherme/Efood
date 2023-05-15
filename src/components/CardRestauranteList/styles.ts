import styled from 'styled-components'
import { Container, List } from '../RestaurantList/styles'

export const RestauranteContainer = styled(Container)`
  margin-top: 56px;
`

export const RestaurantList = styled(List)`
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
`
