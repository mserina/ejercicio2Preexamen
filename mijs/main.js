import { listaHTMLArticulos } from "./fArticulos.js";


const articulosContenedor = document.getElementById("articulos");

function mostrarArticulos(){
    articulosContenedor.innerText = "";
    articulosContenedor.append(listaHTMLArticulos());    

}

window.mostrarArticulos = mostrarArticulos;

