import { Imagem, Titulo } from './styles'

import headerImg from '../../assets/images/Banner_header.png'
import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <Imagem style={{ backgroundImage: `url(${headerImg})` }}>
      <div className='container'>
        <img src={logo} alt='efood' />
        <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
      </div>
    </Imagem>
  )
}

export default Header
