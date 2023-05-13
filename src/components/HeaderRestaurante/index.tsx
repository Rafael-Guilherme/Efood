import { Imagem, ContainerHeader, Banner, Titles } from './styles'

import headerImg from '../../assets/images/Banner_header.png'
import logo from '../../assets/images/logo.png'
import italiano from '../../assets/images/italiana.png'

const HeaderRestaurante = () => {
  return (
    <Imagem style={{ backgroundImage: `url(${headerImg})` }}>
        <ContainerHeader>
          <p>Restaurantes</p>
          <img src={logo} alt='efood' />
          <p>0 produto(s) no carrinho</p>
        </ContainerHeader>
      <Banner>
        <img src={italiano} alt='prato restaurante italiano' />
        <Titles>
          <p>Italiana</p>
          <h2>La Dolce Vita Trattoria</h2>
        </Titles>
      </Banner>
    </Imagem>
  )
}

export default HeaderRestaurante
