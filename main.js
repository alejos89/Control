import { header } from "./componentes/header/headerComponent.js"; 
import { seccion1 } from "./componentes/seccion1/seccionComponent.js";
import { obtenerNav } from "./componentes/navegador/navComponent.js";
 
 function seccion(){
 

    //document es un objeto
    let seccion = document.createElement('seccion');

    //LocalStorage
    let listaDeCompras = localStorage.getItem("carritoLista");

        if (!listaDeCompras) {
            listaDeCompras=[];
            localStorage.setItem("carrito", JSON.stringify(listaDeCompras));
            
        } else {
            listaDeCompras=JSON.parse(listaDeCompras);
            
        }

       console.log(listaDeCompras);

    seccion.appendChild(header());
    seccion.appendChild(seccion1());
    seccion.appendChild(obtenerNav());

       console.log("hola mundo");
   return seccion;
}

        document.body.appendChild(seccion());
