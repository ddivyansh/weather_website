//fetching response from requests using callback functions: 
const { response } = require('express')
const request= require('request')

const forecast= (address, callback)=>{
    //Fetching data from the weatherstack API
    const url2='http://api.weatherstack.com/current?access_key=1f1b92e003f42e674eebd993fc086d17&query='+address+'&units=m'
    //const url ="http://api.weatherstack.com/current?access_key=1f1b92e003f42e674eebd993fc086d17&query=28.6139,77.2090&units=f"
    request({url:url2, json: true}, (error, response)=>{
        if(error)
        {
            //since error is present so response should be undefined
            callback("Low level error, try checking your internet connection.", undefined)
        }
        else if(response.body.error)
        {
            callback("Please enter a valid address & try again.", undefined)
        }
        else
        {
            //everything is alright 
            const data= response.body.current
            callback(undefined, {
                "placesName"  : [response.body.location.name, response.body.location.country] ,
                "currentTemp"  : data.temperature,
                "feelsLike"  : data.feelslike,
                "weather"    : data.weather_descriptions[0]
            })
        }
    })

}

module.exports=forecast