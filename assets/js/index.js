const btn = document.querySelector('#agregar');
const arregloTareas = [];
let ultimoId = 1;

const eliminarTarea = function (idTarea) {
    const posicion = arregloTareas.findIndex((e) => e.id == idTarea);

    if (posicion >= 0) {
        arregloTareas.splice(posicion, 1);

        dibujaLista();
    }
};

const marcarTareaRealizada = function (idTarea) {
    const posicion = arregloTareas.findIndex((e) => e.id == idTarea);


    if (arregloTareas[posicion].realizada == true)
        arregloTareas[posicion].realizada = false;

        else if (arregloTareas[posicion].realizada == false)
        arregloTareas[posicion].realizada= true;

        dibujaLista();
}

const dibujaLista = function () {
    const listaTareas = document.querySelector('#listaTareas');
    // const spanTotalTareas = document.querySelector ('#totalTareas');

    let htmlElementosLista = `
    <thead>
        <tr>
            <th>ID</th>
            <th>Tarea</th>
            <th></th>
        </tr>
    </thead>
    <tbody>`;

    for (const tarea of arregloTareas) {
        if (tarea.realizada){
            statusCheck = 'checked';
        } else {
            statusCheck = '';
        }
        htmlElementosLista += `
    <tr>
        <td>${tarea.id}</td> 
        <td>${tarea.nombre}</td> 
        <td> <input type="checkbox" ${statusCheck}  onclick="marcarTareaRealizada(${tarea.id})"> <button class="btn btn-danger" onclick="eliminarTarea(${tarea.id})"> Eliminar </button></td>
    <tr>`;
    };
    htmlElementosLista += '</tbody>';



    listaTareas.innerHTML = htmlElementosLista;
    document.querySelector('#totalTareas').innerHTML = arregloTareas.length;

    const arregloTareasRealizadas = arregloTareas.filter((e) => e.realizada == true);


    document.querySelector('#tareasRealizadas').innerHTML = arregloTareasRealizadas.length;
};


btn.addEventListener('click', function () {
    const nombreTarea = document.querySelector('#nombreTarea').value;
    const id = ultimoId;
    const realizada = false;

    const tarea = {
        id: id,
        nombre: nombreTarea,
        realizada: realizada
    }

    arregloTareas.push(tarea);

    dibujaLista();

    ultimoId++;
});