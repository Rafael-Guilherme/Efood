import Restaurante from '../../models/Restaurants'
import CardRestaurante from '../CardRestaurante'
import { RestauranteContainer, RestaurantList } from './styles'

type Props = {
  restaurants: Restaurante[]
}

const CardRestauranteList = ({ restaurants }: Props) => {
  return (
    <div className='container'>
      <RestauranteContainer>
        <RestaurantList>
          {restaurants.map((restaurant) => (
            <CardRestaurante
              key={restaurant.id}
              image={restaurant.image}
              title={restaurant.title}
              description={restaurant.description}
              adicionar={restaurant.info}
            />
          ))}
        </RestaurantList>
      </RestauranteContainer>
    </div>
  )
}

export default CardRestauranteList
