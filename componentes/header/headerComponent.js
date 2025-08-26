function header(){
 let header= document.createElement('header');
header.innerText="Tienda de Alejos :)";
header.className="header";

 let div=document.createElement('div');
 div.className="div";
 header.appendChild(div);

 //src
 let img=document.createElement('img')
 img.className="img";
 img.src="https://static.truckersmp.com/images/vtc/logo/30141.1607203704.png";
 div.appendChild(img);
 return header;

}


export {header}