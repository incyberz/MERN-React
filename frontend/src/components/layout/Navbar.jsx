import React from "react";
import { Link } from "react-router-dom";
import SignInLink from "./SignInLinks";
import SignOutLink from "./SignOutLinks";

const Navbar = () => {
  return (
    <nav className="nav wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        <SignInLink />
        <SignOutLink />
      </div>
    </nav>
  );
};

export default Navbar;
