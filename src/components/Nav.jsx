// Bringing in the required import from 'react-router-dom'
import { Link } from "react-router-dom";
import Navbar from "./UI/Navbar";

export default function Nav() {
  return (
    <Navbar
      className="navbar navbar-expand navbar-light bg-light navbar-collapse"
      links={[
        <Link key={2} className="nav-link text-light" to="/about">
          About Me
        </Link>,
        <Link key={3} className="nav-link text-light" to="/portfolio">
          Portfolio
        </Link>,
        <Link key={2} className="nav-link text-light" to="/contact">
          Contact
        </Link>,
        <Link key={2} className="nav-link text-light" to="/resume">
          Resume
        </Link>,
      ]}
    />
  );
}
