import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import PageLogements from './pages/PageLogements'

import Header from './components/Header'
import Footer from './components/Footer'
import Error404 from './components/Error404'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="*" element = {<Navigate to ="/notfound" replace />}/>
        <Route path="/notfound" element ={<Error404 />}/>
        {/* <Route path="/logement/:id" element ={<PageLogements />}/> */}
      </Routes>
      <Footer /> 
    </Router>
  </React.StrictMode>
);


