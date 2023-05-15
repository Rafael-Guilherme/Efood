import { Imagem, ContainerHeader, Banner, Titles, LinkHeader } from './styles'

import headerImg from '../../assets/images/Banner_header.png'
import logo from '../../assets/images/logo.png'
import italiano from '../../assets/images/italiana.png'
import { Link } from 'react-router-dom'

const HeaderRestaurante = () => {
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
        <Banner style={{ backgroundImage: `url(${italiano})` }}>
          {/* <img src={italiano} alt='prato restaurante italiano' /> */}
          <Titles>
            <p>Italiana</p>
            <h2>La Dolce Vita Trattoria</h2>
          </Titles>
        </Banner>
      </div>
    </Imagem>
  )
}

export default HeaderRestaurante
