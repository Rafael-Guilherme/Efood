import { Imagem, ContainerHeader, Banner, Titles, LinkHeader } from './styles'
import { Restaurante } from '../../pages/Home'

import headerImg from '../../assets/images/Banner_header.png'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'


type Props = {
  restaurante: Restaurante
}

const HeaderRestaurante = ({ restaurante }: Props) => {
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <Imagem style={{ backgroundImage: `url(${headerImg})` }}>
        <ContainerHeader>
          <LinkHeader to='/'>Restaurantes</LinkHeader>
          <Link to='/'>
            <img src={logo} alt='efood' />
          </Link>
          <div onClick={openCart}>
            <p>{itens.length} produto(s) no carrinho</p>
          </div>
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
