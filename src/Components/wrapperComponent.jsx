import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import Navigation from "./navComponent";
import Footer from "./footerComponent";
import Menu from "./menuComponent";
import Aboutus from "./aboutusComponent";
import Whatwedo from "./whatwedoComponent";
import Contactenos from "./contactenosComponent";
import News from "./newsComponent";
import ReportarCrimen from "./reportarcrimenComponent";
import GestionProceso from "./gestionprocesoComponent";
import Mapex from "./mapComponent";
import Admin from "./adminmenuComponent";
import NavMain from "./navmainComponent";
import Inform from "./informComponent";
import Search from "./searchComponent";
import Grafica from "./graphicComponent";

import "../assets/css/bootstrap.css";
import "../assets/css/bootstrap-responsive.css";
import "../assets/css/prettyPhoto.css";
import "../assets/js/google-code-prettify/prettify.css";
import "../assets/css/flexslider.css";
import "../assets/css/style.css";
import "../assets/color/default.css";
import "../Style.css";

import MapaFlujo from "../assets/js/mapaflujo";
import Flujo from "../assets/js/flujo";

import Articulos from "../JSON/articulos.json";

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      articulos: Articulos.articulos || [],
      imagen_principal: Articulos.principal || []
    };
  }
  render() {
    return (
      <React.Fragment>
        <NavMain />
        <Router>
          <div>
            <Route exact path="/" component={Menu} />
            <Route exact path="/index.html" component={Menu} />
            <Route path="/indexAdmin.html" component={Admin} />
            <Route path="/AcercaDeNostros.html" component={Aboutus} />
            <Route path="/QueHacemos.html" component={Whatwedo} />
            <Route path="/RealContactenos.html" component={Contactenos} />
            <Route path="/Noticias.html" component={News} />
            <Route
              path="/informe_norte.html"
              render={props => (
                <Inform
                  seccion="Norte"
                  diccionario={this.state.articulos}
                  principal={this.state.imagen_principal}
                />
              )}
            />
            <Route
              path="/informe_centro.html"
              render={props => (
                <Inform
                  seccion="Centro"
                  diccionario={this.state.articulos}
                  principal={this.state.imagen_principal}
                />
              )}
            />
            <Route
              path="/informe_sur.html"
              render={props => (
                <Inform
                  seccion="Sur"
                  diccionario={this.state.articulos}
                  principal={this.state.imagen_principal}
                />
              )}
            />
            <Route path="/ReportarCrimenes.html" component={ReportarCrimen} />
            <Route path="/contact.html" component={Mapex} />
            <Route path="/gestion.html" component={GestionProceso} />
            <Route path="/graficas.html" component={Grafica} />

            <Route
              path="/informe.html"
              render={props => <Search router={document.URL} />}
            />
          </div>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
  componentDidMount() {
    const url = window.location.href;
    const ads = url.split("/");
    if (ads.length > 3) {
      if (ads[3] == "gestion.html") {
        MapaFlujo();
        Flujo();
      }
    }
    console.log(ads);
  }
}

export default Wrapper;
