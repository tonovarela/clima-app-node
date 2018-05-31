const axios = require('axios');
const getClima = async (lat, lng) => {

    const apikey = "41212d7134ef5e0aa599a523c29a9960";
    let respuesta = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${apikey}`);
    return respuesta.data.main.temp;

}

module.exports = {
    getClima

}