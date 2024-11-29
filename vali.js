document.addEventListener('DOMContentLoaded', function() {
    // Obtener el formulario y los elementos de los campos
    const form = document.querySelector('.formulario');
    const button = document.getElementById('submitBtn');
    
    button.addEventListener('click', function(event) {
        // Prevenir el comportamiento predeterminado (en caso de ser un formulario real)
        event.preventDefault();
        
        // Obtener los valores de los campos de entrada
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const domicilio = document.getElementById('domicilio').value;
        const telefono = document.getElementById('telefono').value;

        // Validación: Verificar que todos los campos estén completos
        if (nombre === '' || apellido === '' || domicilio === '' || telefono === '') {
            alert('Por favor, complete todos los campos.');
        } else {
            alert('Compra finalizada correctamente. ¡Gracias por tu compra!');
            form.reset(); // Restablecer todos los campos del formulario
        }
    });
});
