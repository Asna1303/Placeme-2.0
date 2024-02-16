import React from 'react';
import './App.css';
import Login from './molecules/login'
import Signup from './molecules/signup';




import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    
     <Login/>
     <BrowserRouter>
     <Routes>
     
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;







