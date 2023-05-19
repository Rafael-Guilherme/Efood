import { Restaurante } from '../../pages/Home'
import Restaurant from '../Restaurant'

import { Container, List } from './styles'

type Props = {
  restaurants: Restaurante[]
}

const RestaurantsList = ({ restaurants }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {restaurants.map((restaurant, index) => (
            <Restaurant
              key={restaurant.id}
              description={restaurant.descricao}
              image={restaurant.capa}
              grade={restaurant.avaliacao}
              type={restaurant.tipo}
              title={restaurant.titulo}
              destacado={index === 0}
              index={index}
              id={restaurant.id}
              />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default RestaurantsList
