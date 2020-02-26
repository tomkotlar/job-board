import React, { useEffect, useState } from "react"
import "./App.css"
import { JobsList } from "./Components/JobList/JobsList"

const api = "http://localhost:9090/jobs"

async function fetchVacancies(update) {
  try{
    const response = await fetch(api)
    const jobList = await response.json()
    console.log({ jobList})
    update(jobList)
  }catch(err){
    console.log(err)
  }
}

function App() {
  const [vacanciesList, updateVacancies] = useState([])

  useEffect(() => {
    fetchVacancies(updateVacancies)
  }, [])
  return (
    <div className="App">
      <JobsList vacancies={vacanciesList} />
    </div>
  )
}

export default App
