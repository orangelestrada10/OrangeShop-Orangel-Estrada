import React, { Component } from "react";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-info" href="#">
            OrangeShop
          </a>
          <button className="navbar-toggler">
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Celulares
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Notebooks
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Productos
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-success" type="submit">
                Carrito
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
