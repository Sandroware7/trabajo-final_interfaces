//Página 2
// Función para validar los datos del formulario
function validarFormulario() {
    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const dni = document.getElementById('dni').value;
    const correo = document.getElementById('correo').value;

    // Validar nombre
    if (nombre === "") {
        alert("Por favor ingrese su nombre.");
        return;
    }

    // Validar apellido
    if (apellido === "") {
        alert("Por favor ingrese su apellido.");
        return;
    }

    // Validar DNI con length
    if (dni.length !== 8 || isNaN(dni)) {
        alert("El DNI debe contener exactamente 8 caracteres numéricos.");
        return;
    }

    // Validar correo electrónico (debe contener '@')
    if (!correo.includes("@")) {
        alert("El correo electrónico debe contener una '@'.");
        return;
    }

    // Si todo es válido, mostrar mensaje de éxito
    alert("Datos ingresados con éxito");
}
//Página 3
// Selección de elementos en el DOM
const count = document.querySelector('.count');
const addButtons = document.querySelectorAll('.add');

// Contador del carrito
let cartCount = 0;

// Función para agregar al carrito
function addToCart() {
    cartCount++;
    count.textContent = cartCount;
    alert('Producto agregado al carrito');
}

// Agregamos el evento click a cada botón "Agregar al Carrito"
addButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});
