import React, { useEffect, useState } from "react"
import "./App.css"
import { JobsList } from "./Components/JobList/JobsList"
import { Segment, Icon, Button, Header, Loader, Dimmer } from "semantic-ui-react"

const api = "http://localhost:9090/jobs"

async function fetchVacancies(update) {
  try {
    const response = await fetch(api)
    const jobList = await response.json()
    console.log({ jobList })
    update(jobList)
  } catch (err) {
    console.log(err)
  }
}

function App() {
  const [vacanciesList, updateVacancies] = useState([])

  useEffect(() => {
    fetchVacancies(updateVacancies)
  }, [])

  return (
    <div className="segment">
      <Segment placeholder padded>
        <Header icon>
          <Icon name="search" />
          Looking for Dev Jobs
        </Header>
        <Segment.Inline>
          <Button primary>Clear Query</Button>
          <Button>Add Document</Button>
        </Segment.Inline>
      </Segment>
      {!vacanciesList.length ? (
          <Dimmer active >
          <Loader size='massive'>Loading</Loader>
        </Dimmer>
      ) : (
        <div className="Jobs">
          <JobsList vacancies={vacanciesList} />
        </div>
      )}
    </div>
  )
}

export default App
