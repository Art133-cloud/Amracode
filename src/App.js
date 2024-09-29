import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'; 
import AboutPage from "./pages/About";
import Clients from "./pages/Clients";
import OurServices from "./pages/OurServices";
import './App.module.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pages/About" element={<AboutPage />} />
        <Route path="/pages/Clients" element={<Clients />} />
        <Route path="/pages/OurServices" element={<OurServices />} />
      </Routes>
    </Router>
  );
}

export default App;
