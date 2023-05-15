import { Link } from 'react-router-dom'
import Tag from '../Tag'

import { Card, Descricao, Titulo, Infos, InfoHeader, Grade, InfoCard } from './styles'

type Props = {
  title: string
  grade: number | undefined
  image: string
  description: string
  star: string | undefined
  type: string | undefined
  info: string
  week: string | undefined
}

const Restaurant = ({ title, grade, description, star, image, info, type = '', week = ''}: Props) => {
  return (
    <Card>
      <img src={image} />
      <Infos>
        {week && <Tag size='small'>{week}</Tag>}
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
          <Descricao>{description}</Descricao>
          <Link to='/restaurante'>
            <Tag size='big'>{info}</Tag>
          </Link>
        </InfoCard>
    </Card>
  )
}

export default Restaurant
