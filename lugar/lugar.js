const axios = require('axios');

const apiKey = 'AIzaSyB9tqGxRbKT9uh4JmdzGKEPK5ZMX_W_7Jg';


const getLugarLatLng = async (direccion) => {

    let encodedUrl = encodeURI(direccion);
    let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=${apiKey}`);
    if (respuesta.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad de ${direccion}`);
    }
    let location = respuesta.data.results[0];
    let coord = location.geometry.location;



    return {
        direccion:location.formatted_address,
        lat:coord.lat,
        lng:coord.lng
    }
}


module.exports={
    getLugarLatLng 
}
