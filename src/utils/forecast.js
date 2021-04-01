const request = require('request')

const forecast = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=3c54cf185f88f024c262840a885fbf52&query=${lat},${long}&units=f`

    request({ url, json: true }, (err, { body }) => {
        if (err) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 
                `${body.current.weather_descriptions[0]} - It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees. There is a ${body.current.precip * 100}% chance of rain.`
            )
        }
    })
}

module.exports = forecast