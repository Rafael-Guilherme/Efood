import { Botao, CardRestaurant, Titulo, Descricao } from "./styles"

type Props = {
  image: string
  title: string
  description: string
  funcao: () => void
}

const CardRestaurante = ({ image, title, description, funcao }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 145) {
      return descricao.slice(0, 145) + '...'
    }
    return descricao
  }

  return (
    <CardRestaurant>
      <img src={image} />
      <div>
        <div>
          <Titulo>{title}</Titulo>
          <Descricao>{getDescricao(description)}</Descricao>
        </div>
      </div>
      <Botao onClick={funcao}>
        Mais detalhes
      </Botao>
    </CardRestaurant>
  )
}

export default CardRestaurante
