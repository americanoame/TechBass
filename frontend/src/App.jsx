import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/navbar/Nav';
import Home from './pages/home/Home';
import Product from './pages/product/Product';


const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;