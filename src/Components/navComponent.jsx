import React, { Component } from "react";

class Nav extends Component {
  state = {};
  render() {
    return (
      <header>
        <div class="navbar navbar-static-top">
          <div class="navbar-inner">
            <div class="container">
              <div class="logo">
                <a href="index.html">
                  <img
                    src="assets/img/Sombras ciudad.png"
                    class="sombras-ciudad"
                    alt=""
                  />
                </a>
                <a href="index.html">
                  <img
                    src="assets/img/delitos en mira.png"
                    class="delitos"
                    alt=""
                  />
                </a>
              </div>

              <div class="span11 navigation">
                <nav>
                  <ul class="nav topnav">
                    <li>
                      <a href="index.html">
                        <i class="icon-home"></i>Inicio
                      </a>
                    </li>
                    <li class="dropdown">
                      <a href="informe.html">
                        <i class="icon-book"></i> Informe por Sector
                        <i class="icon-angle-down"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li>
                          <a href="informe_norte.html">Norte</a>
                        </li>
                        <li>
                          <a href="informe_centro.html">Centro</a>
                        </li>
                        <li>
                          <a href="informe_sur.html">Sur</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">
                        <i class="icon-map-marker"></i>Explorar mapa
                      </a>
                    </li>
                    <li>
                      <a href="ReportarCrimenes.html">
                        <i class="icon-pencil"></i>Reportar Crimenes
                      </a>
                    </li>
                    <li>
                      <a href="RealContactenos.html">
                        <i class="icon-envelope"></i>Sugerencias
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

export default Nav;
