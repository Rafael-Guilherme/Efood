import { ContainerRedesSociais, FooterContainer, Texto } from './styles'

import logo from '../../assets/images/logo.png'
import instragram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <FooterContainer>
      <div className='container'>
        <Link to='/'>
          <img src={logo} alt='efood' />
        </Link>
        <ContainerRedesSociais>
          <a href='www.instagram.com'>
            <img src={instragram} alt='intagram' />
          </a>
          <a href='www.facebook.com'>
            <img src={facebook} alt='intagram' />
          </a>
          <a href='www.twitter.com'>
            <img src={twitter} alt='intagram' />
          </a>
        </ContainerRedesSociais>
        <Texto>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </Texto>
      </div>
    </FooterContainer>
  )
}

export default Footer
