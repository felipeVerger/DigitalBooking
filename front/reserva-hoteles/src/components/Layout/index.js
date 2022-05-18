import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { LayoutContainer } from "./LayoutStyle";

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      {children}
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
