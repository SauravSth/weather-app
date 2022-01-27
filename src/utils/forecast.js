const request = require("request")

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5986f538f2763fa18944bbe62ecdd77a&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Could not connect to forecast services!', undefined)
        } else if (body.error) {
            callback('Enter proper location details!', undefined)
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like it is ${body.current.feelslike} degrees out.`)
        }
    })
}

module.exports = forecast