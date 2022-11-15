import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

// import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router } from 'react-router-dom'



import Home from './pages/Home'
import Apropos from './pages/Apropos'
import PageLogements from './pages/PageLogements'

import Header from './components/Header'
import Footer from './components/Footer'
import Error404 from './components/Error404'

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Footer /> 
    </Router>
  </React.StrictMode>
);


// reportWebVitals();
