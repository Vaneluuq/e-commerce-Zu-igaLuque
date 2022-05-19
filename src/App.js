import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/itemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import CardProvider from "./components/cartContext"
import NavBar from './components/NavBar';
import Cart from './components/cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CardProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/item/:productId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CardProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
