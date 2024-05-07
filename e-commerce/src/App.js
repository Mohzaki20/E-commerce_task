import Header from "./components/Header/Header";
import TopBar from "./components/Header/TopBar";
import Content from "./components/content/Content";
import storeItem from "./data/storeItems.json";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/products/Products";
import ShoppingCartProvider from "./context/ShoppingCartContext";

function App() {
  return (
    <div className="App">
      <ShoppingCartProvider>
        <BrowserRouter>
          <TopBar />
          <Header />
          <Routes>
            <Route path="/details/:id" element={<Content {...storeItem} />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </BrowserRouter>
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
