import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import AvisoLegal from './components/AvisoLegal';
import DocumentoDetalle from './components/DocumentoDetalle';
import FrecuenteDetalle from './components/FrecuenteDetalle';
const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<AvisoLegal />} />
      <Route path="/detalle-documento/:id" element={<DocumentoDetalle />} />
      <Route path="/detalle-frecuente/:id" element={<FrecuenteDetalle />} />
    </Routes>
  </Router>
);