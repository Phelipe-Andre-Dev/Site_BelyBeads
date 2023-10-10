import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Pedidos from './pages/Pedidos';

import Nav from './layout/Nav';
import Footer from './layout/Footer';

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/> 
    </Routes>

    <Routes>
      <Route path='/Produtos' element={<Produtos/>}/>
    </Routes>

    <Routes>
      <Route path='/Pedidos' element={<Pedidos/>}/>
    </Routes>
    
 
    </BrowserRouter>

   
    
  );
}

export default App;
