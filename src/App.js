import {Root} from "./Routes/Root"
import { CartProvider } from "./Contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <Root/>
    </CartProvider>
    
  );
}

export default App;
