import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Test from './views/Test';
import Header from './components/baliseSemantique/Header';
import Nav from './components/baliseSemantique/Nav';
import Footer from './components/baliseSemantique/Footer';

export default function App() {

  return (
    <Router>
        <Header />

        <Nav />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
        </Routes>

        <Footer />
    </Router>
  );

}