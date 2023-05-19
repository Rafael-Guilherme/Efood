import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import CardRestauranteList from "../../components/CardRestauranteList"
import HeaderRestaurante from "../../components/HeaderRestaurante"

import { Restaurante } from '../../pages/Home'


const RestaurantePage = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  },[id])

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
