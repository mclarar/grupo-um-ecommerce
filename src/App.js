import { Root } from './Routes/Root'
import { CartProvider } from './Contexts/CartContext'
import 'primereact/resources/themes/lara-light-indigo/theme.css' //theme
import 'primereact/resources/primereact.min.css' //core css
import 'primeicons/primeicons.css' //icons

function App() {
  return (
    <CartProvider>
      <Root />
    </CartProvider>
  )
}

export default App
