import React, { Component } from "react";
import NavAdmin from "./navadminComponent";
import NavUser from "./navComponent";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

class NavMain extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/index.html" component={NavUser} />
          <Route exact path="/contact.html" component={NavUser} />
          <Route exact path="/ReportarCrimenes.html" component={NavUser} />
          <Route exact path="/RealContactenos.html" component={NavUser} />
          <Route exact path="/AcercaDeNostros.html" component={NavUser} />
          <Route exact path="/QueHacemos.html" component={NavUser} />
          <Route exact path="/Noticias.html" component={NavUser} />
          <Route path="/indexAdmin.html" component={NavAdmin} />
          <Route path="/gestion.html" component={NavAdmin} />
          <Route path="/panelControl.html" component={NavAdmin} />
          <Route path="/graficas.html" component={NavAdmin} />
          <Route path="/informe_sur.html" component={NavUser} />
          <Route path="/informe_centro.html" component={NavUser} />
          <Route path="/informe_norte.html" component={NavUser} />
          <Route path="/informe.html" component={NavUser} />
          <Route path="/grafico.html" component={NavUser} />
        </div>
      </Router>
    );
  }
}

export default NavMain;
