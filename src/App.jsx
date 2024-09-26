
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
