import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Certifique-se de importar esses
import Header from './Componentes/Header';
import Products from './Componentes/Products';
import Footer from './Componentes/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

// Crie um componente para a sua Home ou use os componentes direto na rota
const Home = () => (
  <>
    <Header />
    <Products />
    <Footer />
  </>
);

function App() {
  return (
    // O basename deve ser exatamente o nome do seu repositório no GitHub
    <BrowserRouter basename="/CloneSitedoCarrotesla">
      <div className="App">
        <Routes>
          {/* A rota principal "/" agora renderiza seus componentes de destaque */}
          <Route path="/" element={<Home />} />
          
          {/* Se você tiver outras páginas, adicione aqui */}
          {/* <Route path="/detalhes" element={<Details />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
