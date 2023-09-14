import { BrowserRouter, Route, Routes } from 'react-router-dom' ;

// Componentes
import NavMobile from "./Components/NavMobile" ;
import Inicio from './Pages/Inicio/Inicio';

import NavEscritorio from './Components/NavEscritorio';
import Search from './Pages/Search/Search';

import Message from './Pages/Message/Message';
import Notificaciones from './Pages/Notificaciones/Notificaciones';
import Crear from './Pages/Crear/Crear';
import Profile from './Pages/Profile/Profile';
import Mas from './Pages/Mas/Mas';
import LateralDerecho from './Components/LateralDerecho';



function App() {
  return (
    <BrowserRouter> 

      <div className='max-h-screen flex flex-row justify-center max-w-full mx-auto bg-black'>

      <NavMobile />
      <NavEscritorio />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/search" element={<Search />} />        
        <Route path="/notification" element={<Notificaciones />} />
        <Route path="/add" element={<Crear />} />
        <Route path="/profile" element={<Profile />} />        
        <Route path="/md" element={<Message />} />
        <Route path="/more" element={<Mas />} />

        {/* Puedes agregar más rutas aquí */}
      </Routes>

      <LateralDerecho /> 

      </div>

    </BrowserRouter>
  );
}

export default App;
