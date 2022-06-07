import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CardProvider from "./components/cartContext"
import NavBar from './components/NavBar/NavBar';
import Cart from "./components/Cart/Cart"
import FormOrder from './components/FormOrder/FormOrder';

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
            <Route path="/order" element={<FormOrder />} />
          </Routes>
        </CardProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
