import { listaDeCompras } from "../../database/carrito.js";
export function item(title, image, description, price) {
    let contenedor = document.createElement("div");
    contenedor.className = "item";

    // título
    let titulo = document.createElement("h3");
    titulo.className="title";
    titulo.textContent = title;

    // imagen
    let img = document.createElement("img");
    img.className="img1";
    img.src = image;
    img.alt = title;

    // descripciónw
    let desc = document.createElement("p");
    desc.textContent = description;
    desc.className="desc";

    // precio
    let precio = document.createElement("p");
    precio.textContent = `Precio: $${price}`;
    precio.className="price";



    contenedor.addEventListener("click", ()=>{
        contenedor.classList.add("verde");
        listaDeCompras.push("Comal");
        console.log(listaDeCompras.length);
        console.log(listaDeCompras);

    })

  
    contenedor.appendChild(titulo);
    contenedor.appendChild(img);
    contenedor.appendChild(desc);
    contenedor.appendChild(precio);

    return contenedor;
}
