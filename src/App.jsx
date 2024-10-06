import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />

    </BrowserRouter>
  );
}

export default App;
