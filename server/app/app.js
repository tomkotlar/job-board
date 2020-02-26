const express = require('express')
const app = express()

app.get('/jobs', async(req, res) => {



return res.send('hello worls')
})
 .catch(err => console.log(err, 'this is api error ____________'))



module.exports = app