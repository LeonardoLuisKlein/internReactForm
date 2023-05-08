import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/home/Home'
import { Success } from './components/pages/success/Success'
import { Error404 } from "./components/pages/error404/Error404";
import { Error401 } from "./components/pages/error401/Error401";

function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/error401" element={<Error401 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
