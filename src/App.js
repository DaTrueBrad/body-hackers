import logo from './logo.svg';
import './App.css';
import LandingPage from './components/landingComponents/LandingPage';
import Menu from './components/menuComponents/Menu';
import { Route, Routes } from 'react-router';
import TeamPage from './components/teamComponents/TeamPage';
import ContactPage from './components/contactComponents/ContactPage';
import Login from './components/authComponents/Login';
import FAQ from './components/faqComponents/FAQ';

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path='*' element={<LandingPage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='team' element={<TeamPage />} />
        <Route path='login' element={<Login />} />
        <Route path='faq' element={<FAQ />} />
      </Routes>
    </div>
  );
}

export default App;
