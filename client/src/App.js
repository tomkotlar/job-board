import React, { Component } from "react"
import "./App.css"
import { JobsList } from "./Components/JobList/JobsList"
import { SearchBox } from "./Components/SearchBox/SearchBox"
import { Loader, Dimmer } from "semantic-ui-react"

// const api = "http://localhost:9090/jobs"

const proxy = "https://cors-anywhere.herokuapp.com/"
const api = `${proxy}https://jobs.github.com/positions.json`

class App extends Component {
  state = {
    error: null,
    vacanciesList: [],
    searchPosition: ""
  }

  async componentDidMount() {
    try {
      const response = await fetch(api)
      console.log(response)
     
      const jobList = await response.json()
      console.log(jobList)
      this.setState({ vacanciesList: jobList })
    } catch (error) {
      console.log(error)
    }
  }

  handleSearch = event => {
    this.setState({ searchPosition: event.target.value })
  }

  render() {
    const { vacanciesList, searchPosition } = this.state
    const filterJobs = vacanciesList.filter(job =>
      job.title.toLowerCase().includes(searchPosition.toLowerCase())
    )
    return (
      <div>
        <SearchBox
          handleSearch={this.handleSearch}
          placeholder="Search for position"
        />
        {!vacanciesList.length ? (
          <Dimmer active>
            <Loader size="massive">Loading</Loader>
          </Dimmer>
        ) : (
          <div className="Jobs">
            <JobsList vacancies={filterJobs} />
          </div>
        )}
      </div>
    )
  }
}

export default App
