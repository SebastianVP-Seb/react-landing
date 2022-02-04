import './App.scss';
import Header from './components/header/background/Header';
import Ganar from './components/ganar/Ganar';
import Requisitos from './components/requisitos/Requisistos';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Ganar />
      <Requisitos />
      <Footer />
    </div>
  );
};

export default App;
