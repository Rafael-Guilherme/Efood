import CardRestauranteList from "../../components/CardRestauranteList"
import HeaderRestaurante from "../../components/HeaderRestaurante"

import pizza from '../../assets/images/pizza.png'
import Restaurant from "../../models/Restaurants"


const restaurantes: Restaurant[] = [
  {
    id: 1,
    image:  pizza,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    info: 'Adicionar ao carrinho'
  },
  {
    id: 2,
    image:  pizza,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    info: 'Adicionar ao carrinho'
  },
  {
    id: 3,
    image:  pizza,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    info: 'Adicionar ao carrinho'
  },
  {
    id: 4,
    image:  pizza,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    info: 'Adicionar ao carrinho'
  },
  {
    id: 5,
    image:  pizza,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    info: 'Adicionar ao carrinho'
  },
  {
    id: 6,
    image:  pizza,
    title: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    info: 'Adicionar ao carrinho'
  }
]

const RestaurantePage = () => {
  return (
    <>
      <HeaderRestaurante />
      <CardRestauranteList restaurants={restaurantes} />
    </>
  )
}

export default RestaurantePage
