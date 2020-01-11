import React, { Component } from "react";
import showMap from "../assets/js/showmap";

class Mapex extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="subintro">
          <div class="container">
            <div class="row">
              <div class="span8">
                <ul class="breadcrumb">
                  <li>
                    <a href="#">
                      <i class="icon-home"></i>
                    </a>
                    <i class="icon-angle-right"></i>
                  </li>
                  <li>
                    <a href="#">Paginas</a>
                    <i class="icon-angle-right"></i>
                  </li>
                  <li class="active">Explorar mapa</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="maincontent">
          <div class="container">
            <div class="row">
              <div class="span4">
                <aside>
                  <div class="widget">
                    <h4 class="rheading">
                      Delito<span></span>
                    </h4>
                    <ul>
                      <li>
                        <label>
                          <strong>Usuario : </strong>
                        </label>
                        <p id="usuario"></p>
                      </li>
                      <li>
                        <label>
                          <strong>Tipo de Delito: </strong>
                        </label>
                        <p id="tipodelito"></p>
                      </li>
                      <li>
                        <label>
                          <strong>Sector: </strong>
                        </label>
                        <p id="sector"></p>
                      </li>
                      <li>
                        <label>
                          <strong>Fecha y hora del delito: </strong>
                        </label>
                        <p id="datetime"></p>
                      </li>
                      <li>
                        <label>
                          <strong>Comentario: </strong>
                        </label>
                        <p id="comentario"></p>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
              <div class="span8">
                <div id="map" class="mapWindow"></div>

                <div class="spacer30"></div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }

  componentDidMount() {
    showMap();
  }
}

export default Mapex;
