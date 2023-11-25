function updateClock() {
    const now = new Date();

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const formattedDate = now.toLocaleString('es-ES', options);

    const hourOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit'}
    const formattedHour = now.toLocaleTimeString("es-ES", hourOptions)

    document.getElementById('clock').textContent = formattedDate;
    document.getElementById('time').textContent = formattedHour;
}


setInterval(updateClock, 1000);


updateClock();