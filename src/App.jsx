import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Product from './pages/Product'
import Cart from './pages/Cart'
import { Auth } from './pages/Auth'
import { AuthProvider } from './providers/authProvider'
import { PrivateRoute } from './routes'
import { Wrapper } from './components/Wrapper.jsx'
import { Account } from './pages/Account'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Wrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<Product />} />
        </Route>

        <Route path="/login" element={<Auth />} />

        <Route element={<PrivateRoute />}>
          <Route element={<Wrapper />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<Account />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
