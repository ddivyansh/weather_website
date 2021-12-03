const express = require('express')

const forecast = require('./utils/forecast.js')

const path=require('path')

const hbs= require('hbs')
const { response } = require('express')

const publicDirectoryPath= path.join(__dirname,"../public")

//making an express application
const app = express()

//changing the root folder & for serving static assets
app.use(express.static(publicDirectoryPath))

// to render dynamic assets from the view directory
const pathview= path.join(__dirname, "../templates/views")
app.set('views', pathview)
app.set('view engine', 'hbs');


//partials
const partialPath = path.join(__dirname,'../templates/partials')
hbs.registerPartials(partialPath)

//setting up GET handlers for GET requests

 app.get('', (req, res)=>{
    //to render views from views directory
    res.render('index', {
        title : "Weather ",
        name : "Divyansh Dheer"
    })
 })

 app.get('/help', (req, res)=> {
     res.render('help', {
         title: "Help",
         name : "Divyansh Dheer"
     })
 })

app.get('/about', (req, res)=>{
    res.render('about', {
        title: "About",
        name : "Divyansh Dheer"
    })
})

//weather endpoint using query
app.get('/weather', (req, res)=>{
    if(!req.query.address) //address query not provided
    {
        return res.send({
            error : "Please enter the address !"
        })
    }
    //address given
    forecast(req.query.address, (error, response)=>{
        if(error)
        {
            res.send(
                {
                    errorMessage : error
                }
            )
        }
        else
        {
            res.send(
                {  
                    city : response.placesName[0],
                    country : response.placesName[1],
                    weather : response.weather,
                    temperature : response.currentTemp
                }
            )
        }
    })
    
})

//404
app.get('*', (req, res)=> {
    res.render('404', {
        title: "404 ",
        errorMessage : "Page not found !",
        name : "Divyansh Dheer"

    })
})

//now start the server
app.listen(3000, ()=>{
    console.log("The server is up & running")
})