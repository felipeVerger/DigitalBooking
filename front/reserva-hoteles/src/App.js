import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { themes } from "./assets/themes";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MobileMenu from "./components/MobileMenu";
import { MenuProvider } from "./context/menu-context";

function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <MenuProvider>
      
      <BrowserRouter>
      <MobileMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      </MenuProvider>
    </ThemeProvider>
  );
}

export default App;
