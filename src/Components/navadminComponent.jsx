import React, { Component } from "react";

class NavAdmin extends Component {
  state = {};
  render() {
    return (
      <header>
        <div class="navbar navbar-static-top">
          <div class="navbar-inner">
            <div class="container">
              <div class="logo">
                <a href="indexAdmin.html">
                  <img
                    src="assets/img/Sombras ciudad.png"
                    class="sombras-ciudad"
                    alt=""
                  />
                </a>
                <a href="indexAdmin.html">
                  <img
                    src="assets/img/delitos en mira.png"
                    class="delitos"
                    alt=""
                  />
                </a>
              </div>

              <div class="span10 navigation">
                <nav>
                  <ul class="nav topnav">
                    <li>
                      <a href="indexAdmin.html">
                        <i class="icon-home"></i>Inicio
                      </a>
                    </li>
                    <li>
                      <a href="panelControl.html">
                        <i class="icon-pencil"></i>Panel Control
                      </a>
                    </li>
                    <li>
                      <a href="gestion.html">
                        <i class="icon-eye-open"></i>Gestion de Proceso
                      </a>
                    </li>
                    <li>
                      <a href="graficas.html">
                        <i class="icon-user"></i>Reportes Graficos
                      </a>
                    </li>
                    <li>
                      <a href="login.html">
                        <i class="icon-signin"></i>Iniciar sesión
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default NavAdmin;
