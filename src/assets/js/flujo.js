import * as $ from "jquery";
import Mapa from "./mapaflujo";
function recargarM() {
  $("#reiniciar").on("click", function() {
    Mapa();
  });
  $("#regresar").on("click", function() {
    Mapa();
  });
}

export default recargarM;
