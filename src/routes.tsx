import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import RestaurantePage from './pages/RestaurantePage'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/restaurantes/:id' element={<RestaurantePage />} />
    </Routes>
  )
}

export default Rotas
