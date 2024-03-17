import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/navbar/Nav';
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import Login from './pages/login/Login';
import Register from './pages/register/Register';


const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;