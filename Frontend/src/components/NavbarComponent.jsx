
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

import logo from '../assets/PeopleNest-logo.png'

const NavbarComponent = () => {
  return (
    <Navbar fluid className="pn-navbar px-4 py-3 sm:px-6 sm:py-2 lg:px-10">
      <NavbarBrand href="/" className="gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-(--pn-primary) text-lg font-bold text-white">
          <img src={logo} alt="Logo"/>
        </div>

        <span className="pn-brand text-xl sm:text-2xl">
          PeopleNest
        </span>
      </NavbarBrand>

      <div className="flex items-center gap-3 md:order-2">
        <Button
          className="pn-btn pn-btn-primary hidden sm:inline-flex"
          onClick={() => {
            window.location.href = "/signup";
          }}
        >
          Sign Up
        </Button>

        <NavbarToggle />
      </div>

      <NavbarCollapse className="md:flex md:items-center md:gap-2">
        <NavbarLink href="/" className="pn-nav-link">
          Home
        </NavbarLink>

        <NavbarLink href="/features" className="pn-nav-link">
          Features
        </NavbarLink>

        <NavbarLink href="/about" className="pn-nav-link">
          About
        </NavbarLink>

        <NavbarLink href="/login" className="pn-nav-link">
          Login
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default NavbarComponent;
