import { useDispatch } from "react-redux"
import { CardapioItem } from "../../pages/Home"
import { Modal, ModalContent, BotaoCarrinho, Descricao, Titulo, Info, Overlay, CloseButton } from "./styles"

import { open, add } from '../../store/reducers/cart'

import { formataPreco } from '../../constants/formataPreco'

type Props = {
  item: CardapioItem
  onCloseModal: () => void
}


const DetalhesDoPrato = ({ item, onCloseModal }: Props) => {
  const dispatch = useDispatch()
  const { nome, foto, descricao, porcao, preco } = item

  const addCart = () => {
    dispatch(add(item))
    dispatch(open())
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
          <BotaoCarrinho onClick={addCart}>Adicionar ao carrinho - {formataPreco(preco)}</BotaoCarrinho>
          </Info>
        </ModalContent>
        <CloseButton onClick={onCloseModal}>X</CloseButton>
      </Modal>
      <Overlay></Overlay>
    </>
  )
}

export default DetalhesDoPrato
