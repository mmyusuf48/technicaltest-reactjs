import DashboardApp from './app/dashboard';
import DetailMovieApp from './app/movie/detail';
import './assets/styles/App.css';
import './assets/styles/index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardApp />} />
        <Route path="/movie/:id" element={<DetailMovieApp />} />
      </Routes>
    </Router>
  );
}

export default App;
