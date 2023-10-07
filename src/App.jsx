import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/NavBar/NavBar';
import Home from "./pages/Home"
import Offer from './pages/Offer';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oferta/:id" element={<Offer />} />
      </Routes>

    </div>
  );
}

export default App