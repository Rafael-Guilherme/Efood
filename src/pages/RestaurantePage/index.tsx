import { useParams } from "react-router-dom"
import { useGetCardapioQuery } from "../../services/api"

import CardRestauranteList from "../../components/CardRestauranteList"
import HeaderRestaurante from "../../components/HeaderRestaurante"



const RestaurantePage = () => {
  const { id } = useParams()
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: restaurante } = useGetCardapioQuery(id!)

  if(!restaurante) {
    return <h3>Carregando detalhes do restaurante</h3>
  }

  return (
    <>
      <HeaderRestaurante restaurante={restaurante} />
      <CardRestauranteList restaurante={restaurante} />
    </>
  )
}

export default RestaurantePage
