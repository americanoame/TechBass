import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/navbar/Nav';
import Home from './pages/home/Home';


const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;