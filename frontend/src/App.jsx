import { BrowserRouter, Routes } from 'react-router-dom';
import Nav from './components/navbar/Nav';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;