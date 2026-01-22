import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import MovieGrid from './components/MovieGrid';
import MovieDetail from './pages/MovieDetail';
import Home from './pages/Home';
import StreamMix from './pages/StreamMix';
import './styles/App.css';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<><Header /><Home apiBaseUrl={API_BASE_URL} /></>} />
          <Route path="/movie/:id" element={<><Header /><MovieDetail apiBaseUrl={API_BASE_URL} /></>} />
          <Route path="/streammix" element={<StreamMix />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
