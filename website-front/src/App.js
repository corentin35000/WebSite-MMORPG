import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Test from './views/Test';
import Header from './components/BaliseSemantique/Header';
import Footer from './components/BaliseSemantique/Footer';
import Chat from './components/Chat';

export default function App() {

  return (
    <Router>
        <Header />

        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/test" element={<Test />} />
            </Routes>
        </main>

        <Chat />

        <Footer />
    </Router>
  );

}