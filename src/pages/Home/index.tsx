import RestaurantsList from "../../components/RestaurantList"
import Restaurant from "../../models/Restaurants"

import japonesa from '../../assets/images/japonesa.png'
import italiana from '../../assets/images/italiana.png'
import star from '../../assets/images/favorite.png'
import Header from "../../components/Header"

const restaurantes: Restaurant[] = [
  {
    id: 1,
    image: japonesa,
    week: 'Destaque da semana',
    type: 'Japonesa',
    title: 'Hioki Sushi',
    grade: 4.9,
    star: star,
    description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    info: 'Saiba mais'
  },
  {
    id: 2,
    image: italiana,
    week: 'Destaque da semana',
    type: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    grade: 4.6,
    star: star,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    info: 'Saiba mais'
  },
  {
    id: 3,
    image: italiana,
    week: 'Destaque da semana',
    type: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    grade: 4.6,
    star: star,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    info: 'Saiba mais'
  },
  {
    id: 4,
    image: italiana,
    week: 'Destaque da semana',
    type: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    grade: 4.6,
    star: star,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    info: 'Saiba mais'
  },
  {
    id: 5,
    image: italiana,
    week: 'Destaque da semana',
    type: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    grade: 4.6,
    star: star,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    info: 'Saiba mais'
  },
  {
    id: 6,
    image: italiana,
    week: 'Destaque da semana',
    type: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    grade: 4.6,
    star: star,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    info: 'Saiba mais'
  },
]

const Home = () => {
  return (
    <>
      <Header />
      <RestaurantsList restaurants={restaurantes} />
    </>
  )
}

export default Home
