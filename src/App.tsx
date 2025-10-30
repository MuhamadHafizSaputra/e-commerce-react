import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Orders } from './pages/Orders';
import { Tracking } from './pages/Tracking';
import { CheckOut } from './pages/CheckOut';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />}/>
      <Route path="checkout" element={<CheckOut />} />
      <Route path="orders" element={<Orders />} />
      <Route path="tracking" element={<Tracking />} />
    </Routes>
  )
}

export default App
