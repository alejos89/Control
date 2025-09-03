import { guardarProducto, obtenerProductos } from "../footer/control/miLocalStorage.js";
import { listaDeCompras } from "../../main.js";

export function item(title, image, description, price) {
    let contenedor = document.createElement("div");
    contenedor.className = "item";

    // título
    let titulo = document.createElement("h3");
    titulo.className="title";
    titulo.textContent = title;
    contenedor.appendChild(titulo);
    
    // imagen
    let img = document.createElement("img");
    img.className="img1";
    img.src = image;
    img.alt = title;
    contenedor.appendChild(img);
    
    // descripciónw
    let desc = document.createElement("p");
    desc.textContent = description;
    desc.className="desc";
    contenedor.appendChild(desc);

    // precio   
    let precio = document.createElement("p");
    precio.textContent = `Precio: $${price}`;
    precio.className="price";

      contenedor.appendChild(precio);
 
    
    contenedor.addEventListener("click", ()=>{
        let carritoLocalStorage = obtenerProductos();
        console.log("carrito: ", carritoLocalStorage);
        carritoLocalStorage.push({precio:price, nombre:title, descripcion:description});
        guardarProducto(carritoLocalStorage);
      console.log("Producto en local Storage");
      location.reload();
 
        
        

    })

  

    return contenedor;
}
