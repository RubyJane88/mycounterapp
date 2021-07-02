import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";

const NavBar = () => {
  const { totalItems } = useSelector((state: RootState) => state.counters);

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
        <div>{totalItems}</div>
      </nav>
    </div>
  );
};

export default NavBar;
