import { ContainerRedesSociais, FooterContainer, Texto } from './styles'

import logo from '../../assets/images/logo.png'
import instragram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => {
  return (
    <FooterContainer>
      <div className='container'>
        <img src={logo} alt='efood' />
        <ContainerRedesSociais>
          <a href='#'>
            <img src={instragram} alt='intagram' />
          </a>
          <a href='#'>
            <img src={facebook} alt='intagram' />
          </a>
          <a href='#'>
            <img src={twitter} alt='intagram' />
          </a>
        </ContainerRedesSociais>
        <Texto>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </Texto>
      </div>
    </FooterContainer>
  )
}

export default Footer
