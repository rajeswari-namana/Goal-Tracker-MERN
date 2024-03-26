const express = require('express')
// const dotenv = require('dotenv').config();

const app = express()
const port = 3000;

app.use('/api/goals',require('./routes/goalRoutes'))

app.get('/api/goals', (req, res) => {
    res.status(200).json({message:" get goals"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



