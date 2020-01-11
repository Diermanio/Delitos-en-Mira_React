import React, { Component } from "react";
import DateTimePicker from "./datetimepickerComponent";
import { Combobox } from "react-widgets";

class Contactenos extends Component {
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
                  <li class="active">Sugerencias</li>
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
                      Contactenos!<span></span>
                    </h4>
                    <ul>
                      <li>
                        <label>
                          <strong>Telefono : </strong>
                        </label>
                        <p>+593 9542235</p>
                      </li>
                      <li>
                        <label>
                          <strong>Email : </strong>
                        </label>
                        <p>comsapp@gmail.com</p>
                      </li>
                      <li>
                        <label>
                          <strong>Direccion : </strong>
                        </label>
                        <p>ESPOL Campus Gustavo Galindo</p>
                      </li>
                    </ul>
                  </div>
                  <div class="widget">
                    <h4 class="rheading">
                      Nuestras Redes Sociales<span></span>
                    </h4>
                    <ul class="social-links">
                      <li>
                        <a href="#" title="Twitter">
                          <i class="icon-square icon-32 icon-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Facebook">
                          <i class="icon-square icon-32 icon-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Google plus">
                          <i class="icon-square icon-32 icon-google-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Linkedin">
                          <i class="icon-square icon-32 icon-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Pinterest">
                          <i class="icon-square icon-32 icon-pinterest"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
              <div class="span8">
                <div class="spacer30"></div>
                <div class="centered">
                  <h2>Envianos tus Sugerencias!</h2>
                </div>
                <div id="sendmessage">Tu mensaje de ha enviado. Gracias!</div>
                <div id="errormessage"></div>
                <form action="" method="post" role="form" class="contactForm">
                  <div class="row">
                    <div class="span4 form-group">
                      <input
                        type="text"
                        name="name"
                        class="input-block-level"
                        id="name"
                        placeholder="Nombre y Apellido"
                        data-rule="minlen:4"
                        data-msg="Por favor ingresar minimo 4 caracteres"
                      />
                      <div class="validation"></div>
                    </div>

                    <div class="span4 form-group">
                      <input
                        type="email"
                        class="input-block-level"
                        name="email"
                        id="email"
                        placeholder="Correo"
                        data-rule="email"
                        data-msg="Por favor ingresar un correo valido"
                      />
                      <div class="validation"></div>
                    </div>

                    <div class="offset1 span3 form-group">
                      <DateTimePicker />
                    </div>

                    <div class="span4 form-group">
                      <Combobox
                        data={["Guayaquil", "Quito", "Riobamba", "Manabi"]}
                        defaultValue={"Guayaquil"}
                      />
                    </div>

                    <div class="span8 form-group">
                      <input
                        type="text"
                        class="input-block-level"
                        name="subject"
                        id="subject"
                        placeholder="Asunto"
                        data-rule="minlen:4"
                        data-msg="Por favor ingresar minimo 8 caracteres"
                      />
                      <div class="validation"></div>
                    </div>
                    <div class="span8 form-group">
                      <textarea
                        class="input-block-level"
                        name="message"
                        rows="5"
                        data-rule="required"
                        data-msg="Por favor escribe algo para nosotros"
                        placeholder="Detalle"
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
          </div>
        </section>
      </React.Fragment>
    );
  }

  componentDidMount() {
    const script12 = document.createElement("script");
    script12.src = "../contactform/contactform.js";
    document.body.appendChild(script12);
  }
}

export default Contactenos;
