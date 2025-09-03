import { header } from "../../componentes/header/headerComponent.js";
import { listaCarrito } from "../../componentes/seccionCarrito/listaCarrito.js";

let seccionCarrito = document.createElement("section");

seccionCarrito.appendChild(header());

seccionCarrito.appendChild(listaCarrito());


document.body.appendChild(seccionCarrito);