import React from "react"
import "./App.css"
import Jobs from "./Components/JobList/JobsList"

const fakeJobs = [
  { id: 1, title: "Software Developer", company: "Google" },
  { id: 2, title: "Junior Software Developer", company: "Apple" },
  {id: 3, title: "Mid-Level Software Developer", company: "Facebook" }
]

function App() {
  return (
    <div className="App">
      <Jobs vacancies={fakeJobs} />
    </div>
  )
}

export default App
