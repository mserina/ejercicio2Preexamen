const listaArticulos = [
    'Raton', 'Teclado', 'Pantalla', 'Alfombrilla', 'TorreCPU', 'Procesador', 'TarjetaGrafica'
];

export function listaHTMLArticulos() {
    // Creamos una lista de artículos
    const ul = document.createElement('ul');
    ul.className = "list-group";
    // Por cada artículo un li
    listaArticulos.forEach( articulo => {
        const li = document.createElement('li');
        li.innerText = articulo;
        li.className = "list-group-item";
        ul.appendChild(li);
    } );

    return ul;
}