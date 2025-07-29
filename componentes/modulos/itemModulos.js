export function item(){
 let item=document.createElement('div');   
 
 let title = document.createElement('h1');
 title.className = "title";
 title.innerText = "Warwick";
 item.appendChild(title);

 let img = document.createElement('img')
 img.className = "img1";
 img.src = "../../assets/ww.jpg"
 item.appendChild(img);

 let text = document.createElement('p');
 text.className = "text";
 text.innerText = "Warwick es una bestia creada en los oscuros callejones de Zaun, cuyo cuerpo fue transformado por experimentos químicos dolorosos. Su organismo está fusionado con un complejo sistema de cámaras y bombas que llenan sus venas con furia alquímica. Desde las sombras, acecha y castiga a aquellos criminales que infestan la ciudad. Warwick se siente atraído por la sangre, y enloquece con su aroma… ninguno que la derrame puede escapar de él.";
 item.appendChild(text);

 item.className="item"
 return item;

}
