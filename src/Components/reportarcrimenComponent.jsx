import React, { Component } from "react";
import createMap from "../assets/js/realMap";
import enviarCrimen from "../assets/js/enviarCrimen";
import { Combobox } from "react-widgets";
import "react-widgets/dist/css/react-widgets.css";
import { makeStyles } from "@material-ui/core/styles";
import DateTimePicker from "./datetimepickerComponent";

class ReportarCrimen extends Component {
  state = {
    color: [
      "robo",
      "terrorismo",
      "incendio provocado",
      "asesinato",
      "violacion",
      "trafico de drogas"
    ]
  };

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
                  <li class="active">Contact us</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="maincontent">
          <div class="container">
            <div class="row">
              <div class="offset2 span8">
                <div class="offset1 span6 centered">
                  <h2 class="centered">
                    <i class="icon-eye-open icon-circled icon-32 active"></i>
                    Reporta el Delito
                  </h2>
                </div>

                <div class="spacer30"></div>
                <form action="" method="post" role="form" class="contactForm">
                  <div class="row">
                    <div class="span">
                      <div id="map" class="mapWindow"></div>
                    </div>

                    <p id="latitud" class="span6 hidden"></p>
                    <p id="longitud" class="span6 hidden"></p>
                    <div class="span4">
                      <Combobox data={this.state.color} defaultValue={"robo"} />
                    </div>
                    <div class="span4">
                      <DateTimePicker />
                    </div>
                  </div>
                  <div class="row">
                    <div class="span8">
                      <textarea
                        id="detalle"
                        class="input-block-level"
                        name="message"
                        rows="5"
                        data-rule="required"
                        data-msg="Please write something for us"
                        placeholder="Describe el delito a detalle"
                      ></textarea>
                      <div class="validation"></div>
                      <div class="text-center">
                        <div id="enviarcrimen" class="btn btn-theme">
                          Enviar
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="row">
              <div class="span4">
                <div class="centered">
                  <img src="assets/img/police.png" alt="" />
                </div>
              </div>
              <div class="span8">
                <h2>
                  Recuerda que mientras más detalles brindes sobre el delito,
                  será mucho más fácil identificar a posibles sospechosos.
                </h2>
              </div>
            </div>
            <div class="row">
              <div class="span4">
                <div class="centered">
                  <img src="assets/img/birdpolice.png" alt="" />
                </div>
              </div>
              <div class="span8">
                <h2>
                  Utiliza el #DelitosEnMiraGuayaquil y recomiendan el sitio si
                  te ha ayudado a mantenerte alerta.
                </h2>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }

  componentDidMount() {
    createMap();
    enviarCrimen();
  }
}

export default ReportarCrimen;
