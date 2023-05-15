import Restaurante from '../../models/Restaurants'
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
              description={restaurant.description}
              image={restaurant.image}
              info={restaurant.info}
              grade={restaurant.grade}
              star={restaurant.star}
              week={index === 0 ? restaurant.week : undefined}
              type={restaurant.type}
              title={restaurant.title}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default RestaurantsList
