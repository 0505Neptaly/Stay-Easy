document.getElementById("formReserva").addEventListener("submit", function(event) {
    event.preventDefault();

    let destino = document.getElementById("destino").value;
    let checkin = document.getElementById("checkin").value;
    let checkout = document.getElementById("checkout").value;
    let personas = document.getElementById("personas").value;

    document.getElementById("resultado").innerText = 
        `Buscando hoteles en ${destino} del ${checkin} al ${checkout} para ${personas} persona(s)...`;
});