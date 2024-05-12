import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Banner from './components/Banner';
import Footer from './components/Footer';
import './style/index.css';
import App from './components/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Banner />
      <App />
      <Footer />
    </Router>
  </React.StrictMode>
);

