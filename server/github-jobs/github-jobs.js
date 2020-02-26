const axios = require("axios").default

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
        console.log(count, "--------")
      })
      .catch(err => console.log(err, "this is errror ____________"))
  }
  console.log(allVacancies.length, "{------- JOBS")
  return allVacancies
}

fetchGihubJobs()

module.exports = fetchGihubJobs
