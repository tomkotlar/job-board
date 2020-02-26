const express = require("express")
const app = express()
const redis = require("redis")
client = redis.createClient()
const { promisify } = require("util")
const getAsync = promisify(client.get).bind(client)

app.get("/jobs", async (req, res) => {
  try {
    const jobs = await getAsync("github")
    return res.send(jobs)
  } catch (err) {
    console.log(err, "this is api error ____________")
  }
})

module.exports = app
