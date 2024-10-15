const listaCliente = [
    ['Miguel', 'Serrano', 19],
    ['Dani', 'Vilches', 12],
    ['Anton', 'Rodrigue', 15],
    ['Rodri', 'Valles', 20],
];

const tablaDescuento = [
    '5%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'
];

export function crearListaClientes(){
   
    //Creamos el "ul"
    const ul = document.createElement('ul');
    //Asignamos la clase (opcional bootstrap)
    ul.className = "list-group";

    //Se hace un forEach a el array de listaClientes
    listaCliente.forEach(clientes =>{

        //Se crea el elemento 'li' y se añade el elemento y la clase (opcional bootstrap)
        const li = document.createElement('li');
        li.innerText = clientes;
        li.className = "list-group-item";

        //Y se añade al 'ul'
        ul.append(li);
    });
    
     //Y se devuelve
    return ul;
}

export function crearTablaDescuento(){
    
    //Se crean los primeros elementos de una tabla (los que no se van a iterar --> table, tbody, thead, etc)
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    
    //Se van añadiendo a su respectiva eiqueta padre (la que va antes p ej: table --> tbody)
    table.append(tbody);
    table.style = "table";

    //Aqui se hace un forEach del array con el contenido de la tabla, cada objeto se le denominara como 'descuento'
    tablaDescuento.forEach(descuento =>{
       
        //Se crean los cobjetos de fila y columna
        const fila = document.createElement('tr');
        const columna = document.createElement('td');
        
        //Se le añade a la columna el contenido, NOTA: Si cada fila tuviera varios campos (columnas), se deberian crear tantas columnas como celdas tuviera el array; pej {Nombre, Apellido, Edad}
        columna.innerText = descuento;

        //Y finalmente se añade las columnas a las filas y las filas a la tabla 
        fila.append(columna);
        tbody.append(fila);

    });
    
    //Y se devuelve
    return table;
    
}

