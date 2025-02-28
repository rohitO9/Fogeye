import { useState } from 'react'
import './App.css';
import { Routes, Route, BrowserRouter as Router, Navigate} from 'react-router-dom';

// import Header from "./components/header";
// import Footer from "./components/footer"
import Home from "./pages/home";
import About from "./pages/about";
import Blog from './pages/blog';
import Product from "./pages/product";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
