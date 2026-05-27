import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Sobre from './pages/Sobre.jsx';
import FAQ from './pages/FAQ.jsx';
import Contato from './pages/Contato.jsx';
import Integrantes from './pages/Integrantes.jsx';
import Solucao from './pages/Solucao.jsx';
import Plataforma from './pages/Plataforma.jsx';
import './styles/global.css';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '8rem 2rem' }}>
      <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🛰️</div>
      <h1 style={{ marginBottom: '1rem' }}>Página não encontrada</h1>
      <p style={{ marginBottom: '2rem' }}>
        Esta área ainda não foi mapeada pelos nossos satélites.
      </p>
      <a href="/" className="btn btn-primary">← Voltar ao início</a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"            element={<Layout><Home /></Layout>} />
        <Route path="/sobre"       element={<Layout><Sobre /></Layout>} />
        <Route path="/faq"         element={<Layout><FAQ /></Layout>} />
        <Route path="/contato"     element={<Layout><Contato /></Layout>} />
        <Route path="/integrantes" element={<Layout><Integrantes /></Layout>} />
        <Route path="/solucao"     element={<Layout><Solucao /></Layout>} />
        <Route path="/plataforma"  element={<Layout><Plataforma /></Layout>} />
        <Route path="*"            element={<Layout><NotFound /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}
