import React  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import { themes } from './assets/themes';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
