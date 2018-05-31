const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad paa obtener el clima'
    }
}).argv;

let getInfo = async (direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temperatura = await clima.getClima(coors.lat, coors.lng);
        return `El clima em ${coors.direccion}  es de ${temperatura}`;
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`;
    }

}




getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));


