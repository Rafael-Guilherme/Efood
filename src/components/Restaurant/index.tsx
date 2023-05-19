import { Link } from 'react-router-dom'
import Tag from '../Tag'
import star from '../../assets/images/favorite.png'

import { Card, Descricao, Titulo, Infos, InfoHeader, Grade, InfoCard } from './styles'
import Button from '../Button'

type Props = {
  title: string
  grade: number
  image: string
  description: string
  type: string
  destacado: boolean
  index: number
  id: number
}

const Restaurant = ({ title, grade, description, image, type, destacado, index, id}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 195) {
      return descricao.slice(0, 195) + '...'
    }
    return descricao
  }

  return (
    <Card>
      <img src={image} />
      <Infos>
      {destacado && (
          <Tag size='small'>{index === 0 ? 'Destaque da semana' : ''}</Tag>
        )}
        <Tag size='small'>{type}</Tag>
      </Infos>
        <InfoCard>
          <InfoHeader>
            <Titulo>{title}</Titulo>
            <Grade>
              <p>{grade}</p>
              <img src={star} />
            </Grade>
          </InfoHeader>
          <Descricao>{getDescricao(description)}</Descricao>
          <Link to='/restaurante'>
            <Button
              title='Conheça o restaurante'
              type='link'
              to={`/restaurantes/${id}`}
            >
              Saiba mais
            </Button>
          </Link>
        </InfoCard>
    </Card>
  )
}

export default Restaurant
