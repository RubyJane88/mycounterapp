import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href={""}>
            Navbar
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
