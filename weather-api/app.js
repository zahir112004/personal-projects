require('dotenv').config()

const express = require('express')
const axios = require('axios')

const port = 5000
const app = express()

const apiKey = process.env.API_KEY

app.get('/weather', (req, res) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${apiKey}`
    axios.get(url).then(response => {
        res.send(response.data)
    })
})

app.listen(port, () => console.log(`Server is running on port ${port}`))