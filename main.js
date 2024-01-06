
let intentos = 1
let identificar = true
function saludar() {
    do {
        let usuario = prompt("ingrese su usuario, (solo 2 intentos)")
        if (usuario == "") { break }

        if ((usuario == "joana bondi") && (intentos <2)) {
            alert("bienvenida joa")
            identificar = false
        }
        else {
            alert("no se identifica al usuario " + usuario)
            intentos++
        }

        if (intentos > 2) {
            alert("usted agotó los intentos")
            break
        }

    } while (identificar)
}

saludar()



let gasto1 = parseFloat(prompt("ingrese el primer gasto del día (valores numéricos)"))
let gasto2 = parseFloat(prompt("ingrese el segundo gasto del día (valores numéricos)"))
let gasto3 = parseFloat(prompt("ingrese el tercer gasto del día (valores numéricos)"))



function gastosDelDia(gasto1, gasto2, gasto3) {
    let gastos = gasto1 + gasto2 + gasto3
    alert("tus gastos del día fueron " + gastos + "pesos")
    return gastos
}

gastosDelDia(gasto1, gasto2, gasto3)



const gastos = [

    { id: "supermercado", gasto: (prompt("ingrese gastos super")) },
    { id: "comida para gatos", gasto: (prompt("ingrese gastos comida para gatos")) },
    { id: "nafta", gasto:(prompt ("ingrese gastos nafta"))},]
 gastos.push(prompt("ingrese una nueva categoría de gastos a la lista"))



for (dinero of gastos) {
    console.log (dinero.id) 
    console.log (dinero.gasto)
}


