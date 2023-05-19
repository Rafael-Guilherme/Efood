import { CardapioItem } from "../../pages/Home"
import { Modal, ModalContent, BotaoCarrinho, Descricao, Titulo, Info, Overlay, CloseButton } from "./styles"

type Props = {
  item: CardapioItem
  onCloseModal: () => void
}

const DetalhesDoPrato = ({ item, onCloseModal }: Props) => {
  const { nome, foto, descricao, porcao, preco } = item

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <>
      <Modal className="visivel">
        <ModalContent>
          <img src={foto} alt={nome} />
          <Info>
            <Titulo>{nome}</Titulo>
            <Descricao>{descricao}</Descricao>
            <Descricao>Serve: {porcao}</Descricao>
          <BotaoCarrinho>Adicionar ao carrinho - {formataPreco(preco)}</BotaoCarrinho>
          </Info>
        </ModalContent>
        <CloseButton onClick={onCloseModal}>X</CloseButton>
      </Modal>
      <Overlay></Overlay>
    </>
  )
}

export default DetalhesDoPrato
