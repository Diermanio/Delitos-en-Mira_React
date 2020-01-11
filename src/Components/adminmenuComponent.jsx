import React, { Component } from "react";
import introJs from "intro.js";
import "intro.js/introjs.css";

class MenuAdmin extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="maincontent">
          <div class="container">
            <div class="row">
              <span></span>
            </div>

            <div class="row">
              <div class="span3 features e_pulse">
                <img src="assets/img/dummies/panel.png" alt="" />
                <div class="box">
                  <div class="divcenter">
                    <a href="panelControl.html">
                      <i class="icon-circled icon-48 icon-pencil icon"></i>
                    </a>
                    <h4>
                      Accede <br />
                      al panel de control de recursos
                    </h4>
                  </div>
                </div>
              </div>

              <div class="span3 offset1 features e_pulse">
                <img src="assets/img/dummies/flujo.png" alt="" />
                <div class="box">
                  <div class="divcenter">
                    <a href="gestion.html">
                      <i class="icon-circled icon-48 icon-eye-open icon"></i>
                    </a>
                    <h4>
                      Visualiza <br />
                      el flujo del proceso al reportar un crimen
                    </h4>
                  </div>
                </div>
              </div>

              <div class="span3 offset1 features e_pulse">
                <img src="assets/img/dummies/graficos.png" alt="" />
                <div class="box">
                  <div class="divcenter">
                    <a href="graficas.html">
                      <i class="icon-circled icon-48 icon-user icon"></i>
                    </a>
                    <h4>
                      Analiza <br />
                      elos graficos acerca de datos importantes de los usuarios.
                      <br />
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }

  componentDidMount() {}
}

export default MenuAdmin;
