import { Imagem, ContainerHeader, Banner, Titles, LinkHeader } from './styles'
import { Restaurante } from '../../pages/Home'

import headerImg from '../../assets/images/Banner_header.png'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

type Props = {
  restaurante: Restaurante
}

const HeaderRestaurante = ({ restaurante }: Props) => {
  return (
    <Imagem style={{ backgroundImage: `url(${headerImg})` }}>
        <ContainerHeader>
          <LinkHeader to='/'>Restaurantes</LinkHeader>
          <Link to='/'>
            <img src={logo} alt='efood' />
          </Link>
          <p>0 produto(s) no carrinho</p>
        </ContainerHeader>
      <div>
        <Banner style={{ backgroundImage: `url(${restaurante.capa})` }}>
          <Titles>
            <p>{restaurante.tipo}</p>
            <h2>{restaurante.titulo}</h2>
          </Titles>
        </Banner>
      </div>
    </Imagem>
  )
}

export default HeaderRestaurante
