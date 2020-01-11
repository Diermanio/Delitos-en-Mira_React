import React, { Component } from "react";
import introJs from "intro.js";
import "intro.js/introjs.css";

class Menu extends Component {
  render() {
    return (
      <React.Fragment>
        <section>
          <div
            class="container"
            data-step="1"
            data-intro="Características principales/importantes de la pagina"
            data-position="right"
          >
            <div class="row" id="intro">
              <div class="span12">
                <div id="mainslider" class="flexslider">
                  <ul class="slides">
                    <li data-thumb="assets/img/slides/flexslider/Guayaquil1.jpg">
                      <img
                        src="assets/img/slides/flexslider/Guayaquil1.jpg"
                        alt=""
                      />
                      <div class="flex-caption primary">
                        <h2>Seguridad</h2>
                        <p>
                          La única app en Guayaquil que busca disminuir el
                          riesgo de ser víctima de delitos.
                        </p>
                      </div>
                    </li>
                    <li data-thumb="assets/img/slides/flexslider/Guayaquil2.jpg">
                      <img
                        src="assets/img/slides/flexslider/Guayaquil2.jpg"
                        alt=""
                      />
                      <div class="flex-caption warning">
                        <h2>Confiabilidad</h2>
                        <p>
                          Cada registro de delito es analizado para verificar la
                          credibilidad de la fuente.
                        </p>
                      </div>
                    </li>
                    <li data-thumb="assets/img/slides/flexslider/Guayaquil33.jpg">
                      <img
                        src="assets/img/slides/flexslider/Guayaquil3.jpg"
                        alt=""
                      />
                      <div class="flex-caption success">
                        <h2>Sencillez</h2>
                        <p>
                          Mapa interactivo que puede ser utilizado por el
                          público de todas la edades.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="maincontent">
          <div class="container">
            <div
              class="row"
              data-step="2"
              data-intro="Acceso rápido a reportar un delito"
            >
              <div class="span12">
                <div class="call-action">
                  <div class="juan">
                    <img class="ml-2" src="assets/img/Juan Pueblo.png" />
                  </div>
                  <div class="text">
                    <h2 id="prueba">
                      Manten informada a la comunidad de tu barrio
                    </h2>
                    <p>Reporta crimenes que hayas presenciado</p>
                  </div>
                  <div class="cta">
                    <a
                      class="btn btn-large btn-theme"
                      href="ReportarCrimenes.html"
                    >
                      Comenzar{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="row"
              data-step="3"
              data-intro="Las 4 funciones principales de nuestra página"
            >
              <div
                class="span3 features e_pulse"
                data-step="4"
                data-intro="Acceso rápido a reportar delito"
              >
                <img src="assets/img/dummies/denuncia.png" alt="" />
                <div class="box">
                  <div class="divcenter">
                    <a href="ReportarCrimenes.html">
                      <i class="icon-circled icon-48 icon-pencil icon"></i>
                    </a>
                    <h4>
                      Reporta <br />
                      cualquier clase de delitos
                    </h4>
                  </div>
                </div>
              </div>

              <div
                class="span3 features e_pulse"
                data-step="5"
                data-intro="Acceso rápido a explorar el mapa y visualizar delitos"
              >
                <img src="assets/img/dummies/mapa.png" alt="" />
                <div class="box">
                  <div class="divcenter">
                    <a href="contact.html">
                      <i class="icon-circled icon-48 icon-briefcase icon"></i>
                    </a>
                    <h4>
                      Explora <br />
                      el mapa interactivo de tu ciudad
                    </h4>
                  </div>
                </div>
              </div>

              <div
                class="span3 features e_pulse"
                data-step="6"
                data-intro="Acceso rápido a los reportes de los sectores"
              >
                <img src="assets/img/dummies/reporte.png" alt="" />
                <div class="box">
                  <div class="divcenter">
                    <a href="informe.html">
                      <i class="icon-circled icon-48 icon-cogs icon"></i>
                    </a>
                    <h4>
                      Informes semanales <br />
                      de tu sector
                    </h4>
                  </div>
                </div>
              </div>

              <div
                class="span3 features e_pulse"
                data-step="7"
                data-intro="Acceso rápido para realizar sugerencias"
              >
                <img src="assets/img/dummies/sugerencia.png" alt="" />
                <div class="box">
                  <div class="divcenter">
                    <a href="RealContactenos.html">
                      <i class="icon-circled icon-48 icon-bullhorn icon"></i>
                    </a>
                    <h4>
                      Dejanos tu sugerencia
                      <br />
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="row"
              data-step="8"
              data-intro="Ejemplos de sectores de los cuales se hacen reportes semanales"
            >
              <div class="span12">
                <h4 class="rheading">
                  Sectores Populares<span></span>
                </h4>
                <div class="row">
                  <div class="span3">
                    <p class="hidden-phone">
                      Dividimos la ciudad de Guayaquil en sectores y subsectores
                      dependiendo del interes de la ciudadania.
                    </p>

                    <a href="informe.html" class="btn btn-theme">
                      Leer más
                    </a>
                  </div>

                  <div class="span9">
                    <div id="latest-work" class="carousel btleft">
                      <div class="carousel-wrapper">
                        <ul class="da-thumbs">
                          <li>
                            <img src="assets/img/citymall.jpg" alt="" />
                            <article class="da-animate da-slideFromRight">
                              <a
                                class="zoom"
                                data-pretty="prettyPhoto"
                                href="assets/img/dummies/big1.jpg"
                              >
                                <i class="icon-zoom-in icon-rounded icon-48 active"></i>
                              </a>
                              <a href="portfolio-detail.html">
                                <i class="icon-link icon-rounded icon-48 active"></i>
                              </a>
                              <div class="hidden-tablet">
                                <p>City Mall</p>
                              </div>
                            </article>
                          </li>

                          <li>
                            <img src="assets/img/norte.jpg" alt="" />
                            <article class="da-animate da-slideFromRight">
                              <a
                                class="zoom"
                                data-pretty="prettyPhoto"
                                href="assets/img/dummies/big1.jpg"
                              >
                                <i class="icon-zoom-in icon-rounded icon-48 active"></i>
                              </a>
                              <a href="portfolio-detail.html">
                                <i class="icon-link icon-rounded icon-48 active"></i>
                              </a>
                              <div class="hidden-tablet">
                                <p>Norte</p>
                              </div>
                            </article>
                          </li>

                          <li>
                            <img src="assets/img/Sur.jpg" alt="" />
                            <article class="da-animate da-slideFromRight">
                              <a
                                class="zoom"
                                data-pretty="prettyPhoto"
                                href="assets/img/dummies/big1.jpg"
                              >
                                <i class="icon-zoom-in icon-rounded icon-48 active"></i>
                              </a>
                              <a href="portfolio-detail.html">
                                <i class="icon-link icon-rounded icon-48 active"></i>
                              </a>
                              <div class="hidden-tablet">
                                <p>Sur</p>
                              </div>
                            </article>
                          </li>

                          <li>
                            <img src="assets/img/clemente-yerovi.jpg" alt="" />
                            <article class="da-animate da-slideFromRight">
                              <a
                                class="zoom"
                                data-pretty="prettyPhoto"
                                href="assets/img/dummies/big1.jpg"
                              >
                                <i class="icon-zoom-in icon-rounded icon-48 active"></i>
                              </a>
                              <a href="portfolio-detail.html">
                                <i class="icon-link icon-rounded icon-48 active"></i>
                              </a>
                              <div class="hidden-tablet">
                                <p>Parque Clemente Yerovi</p>
                              </div>
                            </article>
                          </li>

                          <li>
                            <img src="assets/img/rio-centro-sur.jpg" alt="" />
                            <article class="da-animate da-slideFromRight">
                              <a
                                class="zoom"
                                data-pretty="prettyPhoto"
                                href="assets/img/dummies/big1.jpg"
                              >
                                <i class="icon-zoom-in icon-rounded icon-48 active"></i>
                              </a>
                              <a href="portfolio-detail.html">
                                <i class="icon-link icon-rounded icon-48 active"></i>
                              </a>
                              <div class="hidden-tablet">
                                <p>Riocentro Sur</p>
                              </div>
                            </article>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }

  componentDidMount() {
    introJs().start();
  }
}

export default Menu;
