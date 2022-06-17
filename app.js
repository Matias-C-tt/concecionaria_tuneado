let aquiFuncion = require('./aquiLasFunciones.js');


// es para usar "node app.js 'variable 2'"
let accion1 = process.argv[2];
//"node app.js 'variable 2' 'variable3'"
let accion2 = process.argv[3];
//"node app.js 'variable 2' 'variable3' 'variable4'" según se necesite
let accion3 = process.argv[4];

switch(accion1) {
    case 'listar':
        aquiFuncion.listar();
        break;

    case 'buscar':
        console.log(aquiFuncion.buscarAuto(accion2))
        break;

    case 'vender':
        aquiFuncion.venderAuto(accion2);
        break;
    
    case 'enVenta':
        console.log(aquiFuncion.autosParaLaVenta());
        break;

    case 'nuevos':
        console.log(aquiFuncion.autosNuevos());
        break;

    case 'listaVentas':
        console.log(aquiFuncion.listaDeVentas());
        break;

    case 'totalVentas':
        console.log(aquiFuncion.totalDeVentas());
        break;

    case 'puedeComprar':
        // primero el valor total que el usuario esta dispuesto a pagar
        // segundo el valor que el usuario puede pagar por cuota
        // devuelve los autos que la persona puede pagar
        let persona = {
            "capacidadDePagoTotal" : accion2,
            "capacidadDePagoEnCuotas" : accion3
        }
        console.log(aquiFuncion.autosQuePuedeComprar(persona));
        break

    default:
        console.log('Las acciones disponibles son: vender, enVenta, nuevos, listaVentas, totalVentas, puedeComprar ');
        break;
}
