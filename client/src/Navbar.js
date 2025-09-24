import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow p-3 sticky-top">
      <div className="container-fluid">
        {/* <a className="navbar-brand fs-4 fw-bold" href="#">
          FitGram
        </a> */}
        <a className="navbar-brand fs-4 fw-bold" href="/">
          FitGram
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
