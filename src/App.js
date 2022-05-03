import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components /itemDetailContainer';
import ItemListContainer from './components /ItemListContainer';
import NavBar from './components /NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>} ></Route>
          <Route path="/" element={<ItemListContainer/>} ></Route>
          <Route path="/:productId" element={<ItemDetailContainer/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
