import { obtenerProductos } from "../footer/control/miLocalStorage.js";

export function listaCarrito() {
  let seccion = document.createElement('section');
  seccion.classList.add('lista-carrito');

  let recuperarProductos = obtenerProductos();

  recuperarProductos.forEach(producto => {
    // div general para el item del producto
    let divGeneral = document.createElement('div');
    divGeneral.classList.add('producto-item');

    // div para la imagen
    let divImagen = document.createElement('div');
    divImagen.classList.add('producto-imagen-contenedor');
    let imagen = document.createElement('img');
    imagen.src = producto.imagen;
    imagen.alt = `Imagen de ${producto.nombre}`;
    divImagen.appendChild(imagen);

    // Contenedor para el nombre y el precio
    let divInfo = document.createElement('div');
    divInfo.classList.add('producto-info');

    // p para el nombre
    let pNombre = document.createElement('p');
    pNombre.classList.add('producto-nombre');
    pNombre.textContent = producto.nombre;

    // p para el precio
    let pPrecio = document.createElement('p');
    pPrecio.classList.add('producto-precio');
    pPrecio.textContent = `$${producto.precio}`;

    // Agrega los párrafos al contenedor de información
    divInfo.appendChild(pNombre);
    divInfo.appendChild(pPrecio);

    // Agrega la imagen y la información al div general del producto
    divGeneral.appendChild(divImagen);
    divGeneral.appendChild(divInfo);

    // Agrega el div de producto a la sección principal
    seccion.appendChild(divGeneral);
  });

  return seccion;
}