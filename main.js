import { header } from "./componentes/header/headerComponent.js"; 
 
 function seccion(){
 

    //document es un objeto
    let seccion = document.createElement('seccion');
    seccion.appendChild(header());

        let h1 = document.createElement('h1');
        h1.className="titulo";
        h1.innerText="Hola mundo";
        seccion.appendChild(h1);

        let p = document.createElement('p')
        p.innerText="introducción a JavaScript"
        seccion.appendChild(p);



    

    
  console.log("hola mundo");
   return seccion;
}

        document.body.appendChild(seccion());
