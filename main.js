var listadeDetalles = [];
$(document).ready(function() {
    if(localStorage.getItem('listadeDetalles')) {
        listadeDetalles = JSON.parse(localStorage.getItem('listadeDetalles'));        
        crearLista(listadeDetalles, $('#guardadas'));
    }

$('#lista').on('submit', function(evento) {    
    evento.preventDefault();
    let detalles = $('#detalles').val();
    let item = $('#item').val();
    $('#detalles').val('');
    $('#item').val('');
    cargarDetalle(detalles, item, listadeDetalles);
    crearLista(listadeDetalles, $('#guardadas'));
})

function cargarDetalle (detalles, item, listadeDetalles) {
    if (!item) {
        alert('Ingrese un email, nombre o teléfono');
    } else if (!detalles) {
        alert('Ingresa algun tipo de texto')
    } else {
        listadeDetalles.push({'item' : item, 'detalles' : detalles})
        localStorage.setItem('listadeDetalles', JSON.stringify(listadeDetalles));    
    }
    
}

function crearLista (listadeDetalles, nodo) {
    var nodoLista = '';
    for(i = 0; i < listadeDetalles.length; ++i){
        nodoLista += '<dt>item</dt><dd>' + listadeDetalles[i].item + '</dd><dd><strong>Detalles</strong>: ' + listadeDetalles[i].detalles + '</dd>';
    }    
    nodo.html(nodoLista);
}

$('#clear').on('click', function(event){
    localStorage.clear();
    location.reload();
    $('#guardadas').html('');
    console.log('Limpiar');

})
})

