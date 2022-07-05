import './App.css';
import Home from './components/Home';
import HackthonPage from './components/HackthonPage';
import CreateChallengePage from './components/CreateChallengePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hackthon/:id" element={<HackthonPage />} />
          <Route path="/create/:id" element={<CreateChallengePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
