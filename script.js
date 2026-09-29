// Obtener referencias de los elementos
const btnMessage = document.getElementById('btnMessage');
const message = document.getElementById('message');

// Evento al hacer clic en el botón
btnMessage.addEventListener('click', () => {
    // Alterna la visibilidad del mensaje ocultando o quitando la clase 'hidden'
    message.classList.toggle('hidden');
});