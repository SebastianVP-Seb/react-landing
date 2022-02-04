import './App.scss';
import Header from './components/header/background/Header';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ButtonB from './components/buttons/ButtonB';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <ButtonB />
      <Footer />
    </div>
  );
};

export default App;
