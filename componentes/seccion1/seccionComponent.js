import { item } from "../modulos/itemModulos.js";
import { productos } from "../../database/productos.js";
export function seccion1() {
    let seccion = document.createElement('div');
    seccion.className = "section";



    productos.forEach(elemento => {
        seccion.appendChild(item(elemento.title, elemento.image,elemento.description, elemento.price));
    });

    return seccion;
}
