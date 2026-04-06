import './App.css';
import Header from './Componentes/Header';
import Products from './Componentes/Products';
import Footer from './Componentes/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


<BrowserRouter basename="/CloneSitedoCarrotesla">
   <Routes>
      <Route path="/" element={<Home />} />
   </Routes>
</BrowserRouter>
function App() {
  return (
    <div className="App">
        <Header />
        <Products />
        <Footer />
    </div>
  );
}

export default App; 
