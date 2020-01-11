import L from "leaflet";
import * as $ from "jquery";

function LogIn() {
  $("#login").on("click", function() {
    $.getJSON("./credenciales.json", function(credencial) {
      var longitud = credencial.length;

      for (var i = 0; i < longitud; i++) {
        const us = credencial[i].username;
        const pass = credencial[i].pass;
        const user = $("#username").val();
        const password = $("#password").val();

        if (us === user && pass === password) {
          if (credencial[i].type === "admin") {
            window.location.href = "http://localhost:3000/indexAdmin.html";
          } else if (credencial[i].type === "user") {
            window.location.href = "http://localhost:3000/index.html";
          }
        }
      }
    });
    console.log("2");
  });
}

export default LogIn;
