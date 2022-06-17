let traducime = require('./traductorSinSueldo.js');


let concesionariaTuniada = {
    autosTuneados: traducime.leoElArchivo(),

    listar: function () {
        //muestra todos
        console.log(this.autosTuneados);
    },

    buscarAuto: function (patenteBuscada) {
        // Busca por patente en caso de existir
        console.log('========================')
        console.log('Buscando el auto de patente: ' + patenteBuscada)
        console.log('========================')
        autoBuscado = this.autosTuneados.filter(auto => auto.patente === patenteBuscada)[0];
        return autoBuscado != undefined ? autoBuscado : null;
    },

    venderAuto: function (patenteBuscada) {
        //se cambia el estado a vendido

        //se muestra el auto a vender
        let autoAVender = this.buscarAuto(patenteBuscada);
        console.log(autoAVender.marca + " " + autoAVender.modelo + " " + autoAVender.color);
        console.log('========================')

        //se vende el auto
        autosTuneaditos = this.autosTuneados.map((auto) => {
            if (auto == autoAVender)
                auto.vendido = true
                return auto
        })

        traducime.graboElArchivito(autosTuneaditos);
        console.log('Felicitaciones, auto ' + patenteBuscada + ' vendido!')
    },

    autosParaLaVenta: function () {
        console.log('========================')
        console.log('Estos autos estan en venta:')
        console.log('========================')
        return this.autosTuneados.filter(auto => auto.vendido == false)
    },

    autosNuevos: function () {
        //los 0km a la venta
        console.log('========================')
        console.log('Estos autos estan en venta y son 0km:')
        console.log('========================')
        return this.autosParaLaVenta().filter(auto => auto.km == 0)
    },

    listaDeVentas: function () {
        // cuando se llama a este metodo se imprime un array de precios de autos cuyo estado vendido es true
        let autosVendidos = this.autosTuneados.filter(auto => auto.vendido == true);
        let ventas = []
        autosVendidos.forEach(function (auto) {
            ventas.push(auto.precio);
        });
        return ventas;
    },

    totalDeVentas: function () {
        // se suman los precios de todos los autos vendidos
        let ventas = this.listaDeVentas();
        if (ventas.length > 0) {
            return ventas.reduce((a, b) => a + b, 0)
        } else {
            return 0;
        }
    },

    puedeComprar: function (auto, persona) {
        // este metodo se usa en "autosQuePuedeComprar"
        return auto.precio <= persona.capacidadDePagoTotal && auto.precio / auto.cuotas <= persona.capacidadDePagoEnCuotas
    },

    autosQuePuedeComprar: function (persona) {
        // dada una persona este metodo trae todos los autos que esa persona puede pagar
        let autosALaVenta = this.autosParaLaVenta();
        let autosComprables = autosALaVenta.filter(function (auto) {
            return this.puedeComprar(auto, persona);
        });
        return autosComprables;
    }
}

module.exports = concesionariaTuniada;
