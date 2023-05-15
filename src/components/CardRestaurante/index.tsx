import { Botao, CardRestaurant, Titulo, Descricao } from "./styles"

type Props = {
  image: string
  title: string
  description: string
  adicionar: string
}

const CardRestaurante = ({ image, title, description, adicionar }: Props) => {
  return (
    <CardRestaurant>
      <img src={image} />
      <div>
        <div>
          <Titulo>{title}</Titulo>
          <Descricao>{description}</Descricao>
        </div>
      </div>
      <Botao>
        {adicionar}
      </Botao>
    </CardRestaurant>
  )
}

export default CardRestaurante
