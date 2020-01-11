import React, { Component } from "react";
import { render } from "react-dom";
import Wrapper from "./Components/wrapperComponent";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import LogIn from "./Components/loginComponent";
import Register from "./Components/registerComponent";
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/login.html" component={LogIn} />
          <Route exact path="/register.html" component={Register} />
          <Route exact path="/index.html" component={Wrapper} />
          <Route exact path="/contact.html" component={Wrapper} />
          <Route exact path="/ReportarCrimenes.html" component={Wrapper} />
          <Route exact path="/RealContactenos.html" component={Wrapper} />
          <Route exact path="/AcercaDeNostros.html" component={Wrapper} />
          <Route exact path="/QueHacemos.html" component={Wrapper} />
          <Route exact path="/Noticias.html" component={Wrapper} />
          <Route path="/indexAdmin.html" component={Wrapper} />
          <Route path="/gestion.html" component={Wrapper} />
          <Route path="/panelControl.html" component={Wrapper} />
          <Route path="/graficos.html" component={Wrapper} />
          <Route path="/informe_sur.html" component={Wrapper} />
          <Route path="/informe_centro.html" component={Wrapper} />
          <Route path="/informe_norte.html" component={Wrapper} />
          <Route path="/informe.html" component={Wrapper} />
          <Route path="/graficas.html" component={Wrapper} />
        </div>
      </Router>
    );
  }
}

export default App;
