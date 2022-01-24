import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Opdracht_1 from './pages/Opdracht_1';
import Opdracht_2 from './pages/Opdracht_2';
import Opdracht_3 from './pages/Opdracht_3';
import Use_Effect_API from './pages/Use_Effect_API';
import Increment_Decrement from './pages/Increment_Decrement';
import Accordion from './pages/Accordion';
import Home from './pages/Home';

import './style.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Opdracht_1" element={<Opdracht_1 />} />
        <Route path="/Opdracht_2" element={<Opdracht_2 />} />
        <Route path="/Opdracht_3" element={<Opdracht_3 />} />
        <Route path="/Use_Effect_API" element={<Use_Effect_API />} />
        <Route path="/Increment_Decrement" element={<Increment_Decrement />} />
        <Route path="/Accordion" element={<Accordion />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
