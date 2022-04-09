import express from "express"
import axios from "axios"
import * as cheerio from 'cheerio'

const port = 3000
const app = express()

const articles = []

app.get('/', (req, res) => {
    res.send('Welcome to the stocks API. Navigate to /news to get all the detailed information')
})

app.get('/news', (req, res) => {
    axios.get('https://www.reuters.com/markets/us/').then(response => {
        const html = response.data
        const $ = cheerio.load(html)

        const data = $('.table__table__2px_A tbody tr').each((i, el) => {
            const name = $(el).find('th a').text()
            const lastValue = $(el).children('td').eq(1).find('span').text()
            const changeSymbol = $(el).find(`:last-child span p :first-child`).text() 
            const changeNum = $(el).find(':last-child span p span').eq(1).text()

            const changeValue = changeSymbol + changeNum

            console.log(lastValue)
            articles.push({
                name,
                lastValue,
                changeValue
            })
        })
        // console.log(data)

        res.json(articles)
    })
})

app.listen(port, () => console.log(`Server running on port ${port}`))