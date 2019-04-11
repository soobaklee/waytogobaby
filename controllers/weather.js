const weatherId = process.env.OPENWEATHER_ID;
const axios = require('axios');


module.exports = {
    weather,
}


async function weather(req, res) {
    try {
        let lat = req.body.lat;
        let lng = req.body.lng;
        let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=imperial&appid=${weatherId}`)
        res.json(response.data)
    }
    catch (error) {
        console.error("error", error);
    }
}

