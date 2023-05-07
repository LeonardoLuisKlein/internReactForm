import React from 'react';
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';
import { Home } from './components/pages/home/Home'
import { Success } from './components/pages/success/Success'
import { Error404 } from "./components/pages/error404/Error404";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
