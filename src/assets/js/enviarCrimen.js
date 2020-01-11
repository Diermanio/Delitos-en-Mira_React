import * as $ from "jquery";

function enviarCrimen() {
  $("#enviarcrimen").on("click", function(e) {
    $("#tipodelito").val("");
    $("#fecha").val("");
    $("#detalle").val("");
    $("#latitud").text("");
    $("#longitud").text("");
    console.log(2323);
  });
}

export default enviarCrimen;
