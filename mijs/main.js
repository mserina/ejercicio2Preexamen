import { listaHTMLArticulos } from "./fArticulos.js";
import { crearListaClientes, crearTablaDescuento } from "./fClientes.js";

const clientesContenedor = document.getElementById("clientes");
const articulosContenedor = document.getElementById("articulos");

function mostrarArticulosM(){
    articulosContenedor.innerText = "";
    articulosContenedor.append(listaHTMLArticulos());    

}

function mostrarClientesM(){
    clientesContenedor.innerText = "";
    clientesContenedor.append(crearListaClientes());
}

function crearTablaM(){
    clientesContenedor.innerText = "";
    clientesContenedor.append(crearTablaDescuento());
}

window.mostrarArticulos = mostrarArticulosM;
window.mostrarClientes = mostrarClientesM;
window.crearTabla = crearTablaM;    