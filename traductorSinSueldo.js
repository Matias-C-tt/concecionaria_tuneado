const fs = require('fs');

let traductorEnNegro = 
{
    archivo: 'autosTuniados.json',
    
    leoElArchivo: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },

    graboElArchivito: function(autosTuneaditos){
        return fs.writeFileSync(this.archivo, JSON.stringify(autosTuneaditos))
    },
}
module.exports = traductorEnNegro;