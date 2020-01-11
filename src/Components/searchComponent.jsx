import React, { Component } from "react";
import "../assets/css/buscador.css"
import busca from "../assets/js/search.js";
import Articulos from '../JSON/articulos.json';
import Inform, { verificarlugar } from "./informComponent";
//BRouter para Buscador
import { withRouter } from 'react-router';
import verificalugar from './informComponent';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            articulos: Articulos.articulos || [],
            imagen_principal: Articulos.principal || [],

        }
    }
    componentDidMount() {
        busca();

    }


    render() {
        var lugares = verificarlugar("Norte", "lugar", this.state.articulos);
        var descripcion = verificarlugar("Norte", "descripcion", this.state.articulos);
        return (
            <React.Fragment>
                <p class="buscador mt-4 col-3 mx-auto">
                    <label class="texto_buscar col-sm-12 mx-auto">Buscar Lugar:</label>
                    <input id="buscador" type="input" />
                </p>
                <div class="item col-8 col-sm-8 mx-auto">
                    <div>
                        <p class="titulo_cartilla ">Lugar:<label class="nombres">{lugares[0]}</label></p>
                        <p class="texto_descripcion">{descripcion[0]}</p>
                    </div>
                    <div>
                    <a href="informe_norte.html"><button class="detalle_cita col-12 texto-centrado" data-cita=""> Ir pagina</button></a>
                        
                    </div>
                </div>
                <div class="item col-8 col-sm-8 mx-auto">

                    <div>
                        <p class="titulo_cartilla">Lugar: <label class="nombres">{lugares[1]}</label></p>
                        <p class="texto_descripcion">{descripcion[1]}</p>
                    </div>
                    <div>
                        <a href="informe_norte.html"><button class="detalle_cita col-12 texto-centrado" data-cita=""> Ir pagina</button></a>
                    </div>
                </div>










            </React.Fragment>
        );
    }
}
export default withRouter(Search);
