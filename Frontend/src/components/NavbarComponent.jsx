
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

import logo from "../assets/PeopleNest-logo.png";

const NavbarComponent = ({ minimal = false }) => {
  return (
    <Navbar
      fluid
      className="pn-navbar relative px-5 py-3 sm:px-8 lg:px-10"
    >
      <NavbarBrand href="/" className="shrink-0 gap-2">
        <img
          src={logo}
          alt="PeopleNest Logo"
          className="h-9 w-9 object-contain"
        />

        <span className="pn-brand text-lg font-bold sm:text-xl">
          PeopleNest
        </span>
      </NavbarBrand>

      {!minimal && (
        <>
          <div className="flex items-center gap-3 md:order-2">
            <div className="hidden items-center gap-2 md:flex">
              <Button
                color="light"
                className="pn-login-btn bg-transparent text-sm font-medium"
                onClick={() => {
                  window.location.href = "/login";
                }}
              >
                Log In
              </Button>

              <Button
                className="pn-btn pn-btn-primary text-sm"
                onClick={() => {
                  window.location.href = "/signup";
                }}
              >
                Sign Up
              </Button>
            </div>

            <NavbarToggle />
          </div>

          <NavbarCollapse className="md:order-1 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
            <NavbarLink href="/" className="pn-nav-link">
              Home
            </NavbarLink>

            <NavbarLink
              className="pn-nav-link"
              onClick={() => {
                document.getElementById("features")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Features
            </NavbarLink>

            <NavbarLink href="/about" className="pn-nav-link">
              About
            </NavbarLink>

            <div className="flex flex-col gap-2 md:hidden">
              <NavbarLink href="/login" className="pn-nav-link">
                Log In
              </NavbarLink>

              <NavbarLink href="/signup" className="pn-nav-link">
                Sign Up
              </NavbarLink>
            </div>
          </NavbarCollapse>
        </>
      )}
    </Navbar>
  );
};

export default NavbarComponent;
