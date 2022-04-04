/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let button = document.querySelector("button");
  let mensaje = document.createElement("h1");
  // let flor = { nombre: "gerbera", color: "rojo", detalle: [1, 2, 3, 4] };
  // let p = document.createElement("p");
  // p.innerHTML = `la flor se llama ${flor.nombre}, su color es ${flor.color} ${flor.detalle}`;
  document.body.appendChild(p);
  button.addEventListener("click", function() {
    let edad = document.querySelector("input").value;
    if (edad >= 18) {
      mensaje.innerHTML = `tienes ${edad} entonces ya puedes beber`;
    } else if (edad < 0) {
      mensaje.innerHTML = "¿cómo puedes escribir si ni siquiera estás vivo?";
    } else {
      mensaje.innerHTML =
        "tienes" + " " + edad + " " + "entonces no puedes beber";
    }
    // mensaje.innerHTML = ` ${
    //   edad < 18
    //     ? `tienes ${edad}, entonces eres menor de edad`
    //     : `tienes ${edad}, entonces eres mayor de edad`
    // } `;
    // mensaje.innerHTML = `${edad && `tienes ${edad}`}`;
    //mensaje.innerHTML = `${edad || "edad no especificada"}`;

    document.body.appendChild(mensaje);
  });
};
