import React, { Component } from "react";

class WhatWeDo extends Component {
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
                    <a href="#">Pages</a>
                    <i class="icon-angle-right"></i>
                  </li>
                  <li class="active">Que Hacemos?</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="maincontent">
          <div class="container">
            <div class="row">
              <div class="span12">
                <h2>Bienvenido/a a Delitos en Mira :3</h2>
                <h5>
                  <i class="icon-eye-open icon-circled icon-32 active"></i>{" "}
                  Ayudando a la comunidad a proteger a la comunidad!
                </h5>
              </div>
            </div>
            <div class="row">
              <div class="span6">
                <div class="accordion" id="accordion2">
                  <div class="accordion-group">
                    <div class="accordion-heading">
                      <a
                        class="accordion-toggle active"
                        data-toggle="collapse"
                        data-parent="#accordion2"
                        href="#collapseOne"
                      >
                        <i class="icon-minus"></i>Mision
                      </a>
                    </div>
                    <div id="collapseOne" class="accordion-body collapse in">
                      <div class="accordion-inner">
                        El objetivo de esta página es proporcionarle un medio a
                        los miembros de la comunidad de guayaquil para que
                        puedan informarse acerca de los delitos que ocurren en
                        los diversos sectores que frecuentan. Con esta
                        información podrán saber que sectores evitar o cuáles
                        son los más seguros.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-group">
                    <div class="accordion-heading">
                      <a
                        class="accordion-toggle"
                        data-toggle="collapse"
                        data-parent="#accordion2"
                        href="#collapseTwo"
                      >
                        <i class="icon-plus"></i>Mapa Interactivo
                      </a>
                    </div>
                    <div id="collapseTwo" class="accordion-body collapse">
                      <div class="accordion-inner">
                        Los usuarios pueden interactuar con un mapa que
                        representara toda la ciudad, y sobre el cual se
                        visualizaran marcadores. Estos indican los puntos en los
                        que se han cometido delitos, y al presionarlos se
                        mostrarán los detalles del mismo.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-group">
                    <div class="accordion-heading">
                      <a
                        class="accordion-toggle"
                        data-toggle="collapse"
                        data-parent="#accordion2"
                        href="#collapseThree"
                      >
                        <i class="icon-plus"></i>Informes por Sectores
                      </a>
                    </div>
                    <div id="collapseThree" class="accordion-body collapse">
                      <div class="accordion-inner">
                        Semanalmente se analizan los datos de los delitos
                        publicados por los usuarios, y se realizaran reportes de
                        los sectores más populares. En estos informes se
                        resumira la información importante de los delitos.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-group">
                    <div class="accordion-heading">
                      <a
                        class="accordion-toggle"
                        data-toggle="collapse"
                        data-parent="#accordion2"
                        href="#collapseFour"
                      >
                        <i class="icon-plus"></i>Reportes de Usuario
                      </a>
                    </div>
                    <div id="collapseFour" class="accordion-body collapse">
                      <div class="accordion-inner">
                        Los usuarios tienen la capacidad de reportar los delitos
                        que hayan presenciado o sufrido para que los demás
                        miembros de la comunidad puedan visualizarlos e
                        informarse. De los delitos se pide la siguiente
                        información: tipo, fecha, hora, ubicación, y detalle.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="span6">
                <div class="centered">
                  <img src="assets/img/birdpolice.png" alt="" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="span12">
                <h4 class="rheading">
                  Noticias<span></span>
                </h4>
                <div class="row">
                  <div class="span3">
                    <p class="hidden-phone">
                      Averigua acerca de las novedades, y ultimos cambios que ha
                      recibido la pagina.
                    </p>
                    <a href="Noticias.html" class="btn btn-theme">
                      Read More
                    </a>
                  </div>
                  <div class="span9">
                    <div id="latest-work" class="carousel btleft">
                      <div class="carousel-wrapper">
                        <ul class="da-thumbs">
                          <li>
                            <img src="assets/img/dummies/work1.jpg" alt="" />
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
                                <p>Serenity theme</p>
                              </div>
                            </article>
                          </li>
                          <li>
                            <img src="assets/img/dummies/work2.jpg" alt="" />
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
                                <p>Dark apps</p>
                              </div>
                            </article>
                          </li>
                          <li>
                            <img src="assets/img/dummies/work3.jpg" alt="" />
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
                                <p>Mobile apps</p>
                              </div>
                            </article>
                          </li>
                          <li>
                            <img src="assets/img/dummies/work4.jpg" alt="" />
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
                                <p>Mobile template</p>
                              </div>
                            </article>
                          </li>
                          <li>
                            <img src="assets/img/dummies/work5.jpg" alt="" />
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
                                <p>Business theme</p>
                              </div>
                            </article>
                          </li>
                          <li>
                            <img src="assets/img/dummies/work6.jpg" alt="" />
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
                                <p>Portfolio graphic</p>
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
}

export default WhatWeDo;
