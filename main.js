import { header } from "./componentes/header/headerComponent.js"; 
import { seccion1 } from "./componentes/seccion1/seccionComponent.js";
import { obtenerNav } from "./componentes/navegador/navComponent.js";
 
 function seccion(){
 

    //document es un objeto
    let seccion = document.createElement('seccion');

    seccion.appendChild(header());
    seccion.appendChild(seccion1());
    seccion.appendChild(obtenerNav());

       console.log("hola mundo");
   return seccion;
}

        document.body.appendChild(seccion());
