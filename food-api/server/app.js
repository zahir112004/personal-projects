import express from 'express'
import axios from 'axios'

const port = process.env.PORT || 3000
const app = express()

app.get('/api', (req, res) => {
    // axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata').then(response => {
    //     res.json(response.data)
    // })

    res.json({ message: 'Welcome to the API' })
})

app.listen(port, () => console.log(`Server running on port ${port}`))