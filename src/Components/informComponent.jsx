import "../assets/css/bootstrap.css";
import "../assets/css/bootstrap-responsive.css";
import "../assets/css/prettyPhoto.css";
import "../assets/js/google-code-prettify/prettify.css";
import "../assets/css/flexslider.css";
//import "../assets/css/style_norte.css";
import "../Style.css";
import "../assets/css/informs.css";

import React, { Component } from "react";
export function verificarlugar(seccion, clave, dic) {
  var valores = ["s", "s"];
  var todo = dic;
  var i = 0;
  for (let articulo of todo) {
    if (seccion === articulo["seccion"]) {
      valores[i] = articulo[clave];
      i += 1;
    }
  }
  return valores;
}
class Inform extends Component {
  state = {};

  verificarimagen(seccion) {
    var valor = "s";
    var todo = this.props.principal;
    for (let articulo of todo) {
      if (seccion === articulo["seccion"]) {
        valor = articulo["src"];
      }
    }
    return valor;
  }

  render() {
    var lugares = verificarlugar(
      this.props.seccion,
      "lugar",
      this.props.diccionario
    );
    var descripciones = verificarlugar(
      this.props.seccion,
      "descripcion",
      this.props.diccionario
    );
    var imagenes = verificarlugar(
      this.props.seccion,
      "src",
      this.props.diccionario
    );
    var imagen_principal = this.verificarimagen(this.props.seccion);

    return (
      <React.Fragment>
        <section id="maincontent" class="fila">
          <div
            id="primerdivisor"
            class="fila texto-centrado mx-auto paddingleft-5 bg-"
          >
            <img
              class="offset-2 col-3 max-width:100% heigth:autos"
              src={"assets/img/policiainforme.png"}
            />
            <h2 id="titulonorte" class="col-5 paddingtop-5 ">
              Informe {this.props.seccion}
            </h2>
          </div>

          <div id="segundodivisor" class="margintop-3 mx-auto offset-1 col-10">
            <img
              id="norte"
              src={imagen_principal}
              class="texto-centrado max-width:100% heigth:auto"
            />
          </div>

          <div id="tercerdivisor" class="fila margintop-5">
            <div id="subdivisor" class="margintop-5 offset-1 col-4 d-block">
              <h3 id="nombres" class="texto-centrado">
                {lugares[0]}
              </h3>
              <img
                id="citymall"
                src={imagenes[0]}
                class="max-width:100% heigth:auto"
              />
              <p class="texto-justificado margintop-2 negrita">
                {" "}
                {descripciones[0]} <a href="index.html">seguir leyendo</a>...
              </p>
            </div>

            <div id="subdivisor" class="margintop-5 offset-2 col-4 d-block">
              <h3 id="nombres" class="texto-centrado">
                {lugares[1]}
              </h3>
              <img
                id="parqueclemente"
                src={imagenes[1]}
                class="max-width:100% heigth:auto"
              />
              <p class="text-justify mt-2 font-weigth-bold">
                {" "}
                {descripciones[1]} <a href="index.html">seguir leyendo</a>...
              </p>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
/*const link = document.createElement("link");
  link.rel ="stylesheet";
  link.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
  link.integrity = "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T";
  link.crossOrigin="anonymous";
  document.head.appendChild(link);*/
export default Inform;
