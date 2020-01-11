import React, { Component } from "react";

class Aboutus extends Component {
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
                  <li class="active">Acerca de Nosotros</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="maincontent" class="demo">
          <div class="container">
            <div class="row">
              <div class="span12">
                <h4 class="rheading">
                  Nuestros{" "}
                  <del>
                    <strong>Esclavos</strong>
                  </del>{" "}
                  Trabajadores<span></span>
                </h4>
                <div class="tabbable tabs-top">
                  <ul class="nav nav-tabs">
                    <li class="active">
                      <a href="#one" data-toggle="tab">
                        <i class="icon-briefcase"></i> Luis Salazar
                      </a>
                    </li>
                    <li>
                      <a href="#two" data-toggle="tab">
                        <i class="icon-briefcase"></i>Carlos Sanchez
                      </a>
                    </li>
                    <li>
                      <a href="#three" data-toggle="tab">
                        <i class="icon-briefcase"></i>Jordy Villao
                      </a>
                    </li>
                    <li>
                      <a href="#four" data-toggle="tab">
                        <i class="icon-briefcase"></i>Diego Yance
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div class="tab-pane active" id="one">
                      <p>Estudiante promedio de ESPOL</p>
                      <p>Gamer de nacimiento, y otaku por profesion :v</p>
                    </div>
                    <div class="tab-pane" id="two">
                      <p></p>
                    </div>
                    <div class="tab-pane" id="three">
                      <p></p>
                    </div>
                    <div class="tab-pane" id="four">
                      <p>Carry 2</p>
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

export default Aboutus;
