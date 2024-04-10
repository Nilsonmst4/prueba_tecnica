const esPerfecto = (n) => {
    let suma = 0;
    for (var i = 1; i <= n; i++) {
        if(n != i) {
            if ((n % i) == 0) {
                suma += i;
            }
        }
    }
    return suma == n;
}
const listadoNumerosPerfectos = (n, n2) => {
    let _nums = '';
    for (var i = n; i <= n2; i++) {
        if (esPerfecto(i)) {
            _nums += ', ' + i;
        }
    }
    return _nums;
}

$(document).ready((e) => {
    $('#inicioRango').focus();
    $(document).on('click', '.btn-calcular', (e) => {
        const _desde = parseInt($('#inicioRango').val());
        const _hasta = parseInt($('#finRango').val());
        if(_hasta >= _desde) {
            let _result = listadoNumerosPerfectos(_desde, _hasta);
           
            _result = _result.substring(1);
            _result = _result.substring(1);
            if([_result].includes('')) {
                $('.result').text('No existen números perfectos en este rango.');
            } else {
                $('.result').text('Los números perfectos en el rango dado son: ' + _result);
            }
        } else {
            $('.result').text('El hasta no puede ser menor al desde');
        }
    });
});