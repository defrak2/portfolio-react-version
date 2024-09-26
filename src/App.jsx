
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import React from 'react';
import Header from './components/Header';

function App() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
