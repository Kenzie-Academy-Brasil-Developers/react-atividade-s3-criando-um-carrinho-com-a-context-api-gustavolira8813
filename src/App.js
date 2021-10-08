import "./App.css";
import ProductList from "./components/productList";

import { CartProvider } from "./Providers/cart";
import { CatalogueProvider } from "./Providers/catalogue";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div className="App">
      <CatalogueProvider>
        <CartProvider>
          <GlobalStyle />
          <h2>Catalogue</h2>
          <ProductList type="catalogue" />
          <h2>Cart</h2>
          <ProductList type="cart" />
        </CartProvider>
      </CatalogueProvider>
    </div>
  );
}

export default App;
