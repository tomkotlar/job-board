const axios = require("axios").default
const redis = require("redis");
const client = redis.createClient();
const { promisify } = require("util");
const setAsync = promisify(client.set).bind(client);

const instance = axios.create({
  baseURL: "https://jobs.github.com/positions.json"
})

const fetchGihubJobs = async () => {
  let allVacancies = []
  let count = 1
  let currentPage = 0

  while (count > 0) {
    await instance
      .get(`?page=${currentPage}`)
      .then(response => {
        let jobs = response.data
        allVacancies.push(...jobs)
        count = jobs.length
        currentPage++
      })
      .catch(err => console.log(err, "this is github-jobs error"))
  }
// return allVacancies
const success = await setAsync('github', JSON.stringify(allVacancies))
}
module.exports = fetchGihubJobs
