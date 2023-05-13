import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import RestaurantePage from './pages/RestaurantePage'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/restaurante' element={<RestaurantePage />} />
    </Routes>
  )
}

export default Rotas
