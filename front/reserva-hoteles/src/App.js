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
import { BookingProvider } from "./context/booking-context";
import ProductsList from "./pages/ProductsList";
import Product from "./pages/Product";
import ProductBooking from "./pages/ProductBooking";
import SuccessfulMessage from "./pages/SuccessfulMessage";
import Favorites from "./pages/Favorites";
import Error from "./pages/Error";
import SuccessfulMessageProduct from "./pages/SuccessfulMessageProduct";
import Admin from "./pages/Admin";
import MyBookings from "./pages/MyBookings";


function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <UserProvider>
        <MenuProvider>
          <FilterProvider>
            <BookingProvider>
              <BrowserRouter>
                <MobileMenu />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/productsList" element={<ProductsList/>}/>
                  <Route path="/product/:id" element={<Product />} />
                  <Route path="/product/:id/booking" element={<ProductBooking />} />
                  <Route path="/product/:id/booking/successful" element={<SuccessfulMessage message={'Su reserva se ha realizado con éxito.'}/>} />
                  <Route path="/administration/successful-product-creation" element={<SuccessfulMessageProduct message={'Tu propiedad se ha creado con éxito.'}/>} />
                  <Route path='/favorites' element={<Favorites/>}/>
                  <Route path='/administration' element={<Admin/>}/>
                  <Route path='/:userId/bookings' element={<MyBookings/>}/>
                  <Route path="*" element={<Error />} />
                </Routes>
              </BrowserRouter>
            </BookingProvider>
          </FilterProvider>
        </MenuProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
