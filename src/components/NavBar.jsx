import React, { Component } from "react";
import Carrito from "./assets/img/carrito.png"
import Logo from "./assets/img/OrangeShop.png"
import Cart from "./Cart"



function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-info" href="#">
          <img className="App" src={Logo} width="100px" height="100px"/>
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
            <button className="btn" type="submit">
            <img className="App" src={Carrito} width="60px" height="60px"/>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
