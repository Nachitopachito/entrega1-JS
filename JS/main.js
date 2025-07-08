let valorDolar = 950;
let historialCompras = [];

function comprarDolares() {
    let cantidad = prompt("¿Cuántos dólares vas a comprar?");
    cantidad = Number(cantidad);

    if (cantidad > 0) {
        let total = cantidad * valorDolar;
        alert("El total a pagar es: $" + total);
        console.log("Compra realizada: " + cantidad + " dólares. Total pagado: $" + total);
        
        historialCompras.push({ cantidad: cantidad, total: total });
    } else {
        alert("Por favor, ingresá un número mayor a 0.");
    }
}

let seguir = true;

while (seguir) {
    for (let i = 1; i <= 3; i++) {
        comprarDolares();
    }

    let respuesta = prompt("¿Querés hacer más compras? (si/no)");
    if (respuesta !== "si" && respuesta !== "SI" && respuesta !== "Si") {
        seguir = false;
        alert("¡Gracias por usar la casa de cambio!");
    
        if (historialCompras.length > 0) {
            let resumen = "Historial de compras: ";
            historialCompras.forEach(function(compra, index) {
                resumen += (index + 1) + ". " + compra.cantidad + " dólares - $" + compra.total;
                if (index < historialCompras.length - 1) {
                    resumen += " | "; 
                }
            });
            alert(resumen);
        }
    }
}