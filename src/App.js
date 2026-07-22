import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookingPage from './components/BookingPage';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <Header>
      <Nav/>
    </Header>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/booking" element={<BookingPage />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
