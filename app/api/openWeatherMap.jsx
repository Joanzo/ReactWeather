var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=a49b40006fa26c7b0d357d40a63e7386&units=metric';

module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        // `${will pass whatever VARIABLE or SCRIPT inside this}`

        return axios.get(requestUrl,{
            'validateStatus': function(status) {
                return status>= 200 && status < 600;
            },
        })
        .then(function (response) {
            if (response.data.cod && response.data.message) {
                alert('masuk error data');
                throw new Error(response.data.message);
            } else {
                return response.data.main.temp;
            }
        },function (error) {
            alert('masuk catch function');
            throw new Error(error);
        });
    }
}