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
import { UserProvider } from "./context/user-context";
import { FilterProvider } from "./context/filter-context";
import ProductsList from "./pages/ProductsList";
import Product from "./pages/Product";
import ProductBooking from "./pages/ProductBooking";
import SuccessfulMessage from "./pages/SuccessfulMessage";
import Error from "./pages/Error";


function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <UserProvider>
        <MenuProvider>
          <FilterProvider>
            <BrowserRouter>
              <MobileMenu />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/productsList" element={<ProductsList/>}/>
                <Route path="/product/:id" element={<Product />} />
                <Route path="/product/:id/booking" element={<ProductBooking />} />
                <Route path="/product/:id/booking/successful" element={<SuccessfulMessage />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </BrowserRouter>
          </FilterProvider>
        </MenuProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
