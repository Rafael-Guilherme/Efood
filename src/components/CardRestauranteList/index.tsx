import { CardapioItem, Restaurante } from '../../pages/Home'
import CardRestaurante from '../CardRestaurante'
import DetalhesDoPrato from '../DetalhesDoPrato'
import { RestauranteContainer, RestaurantList } from './styles'
import { useState } from "react"

type Props = {
  restaurante: Restaurante
}

const CardRestauranteList = ({ restaurante }: Props) => {
  const [selectedItem, setSelectedItem] = useState<CardapioItem | null>(null);

  const abrirModal = (item: CardapioItem) => {
    setSelectedItem(item);
  };

  const fecharModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className='container'>
      <RestauranteContainer>
        <RestaurantList>
          {restaurante.cardapio.map((item) => (
            <CardRestaurante
              key={item.id}
              image={item.foto}
              title={item.nome}
              description={item.descricao}
              funcao={() => abrirModal(item)}
            />
          ))}
        </RestaurantList>
      {selectedItem && (
        <DetalhesDoPrato
          item={selectedItem}
          onCloseModal={fecharModal}
        />
      )}
      </RestauranteContainer>
    </div>
  )
}

export default CardRestauranteList
