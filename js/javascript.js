function alerta(){
    Swal.fire("Formulario enviado con éxito!!")
};


$('#nombre').focusIn(function (cadena){
    $('#ocultar').fadeIn();
    var cadena = $('#nombre').val();
    if (cadena.length > 3 && cadena.length < 20 ){
        $('#ocultar').text('CORRECTO').css(color,green);
        return true
    }
    else{
        $('#ocultar').text('NOMBRE DEBE SER ENTRE 3 Y 20 LETRAS').css(color,red);
        return false
    }
});


