import { item } from "../modulos/itemModulos.js";
import { productos } from "../../database/productos.js";

export function seccion1() {
    let seccion = document.createElement('div');
    seccion.className = "section";

   
    for (let i = 0; i < 6 && i < productos.length; i++) {
        seccion.appendChild(item(productos[i].title, productos[i].image, productos[i].description, productos[i].price));
    }

    return seccion;
}