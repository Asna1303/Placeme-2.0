import React from 'react';
import './App.css';
import Login from './molecules/login';
import Signup from './molecules/signup';
import Forgetpassword from './molecules/forgetpassword';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <Routes> 
          <Route path="/" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgetpassword" element={<Forgetpassword />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
