import React from "react"
import { SingleJob } from "../SingleJob/SingleJob"
import { Grid } from "semantic-ui-react"

const JobsList = ({ vacancies }) => {
  return (
    <React.Fragment>
      <Grid stackable columns={6}>
        {vacancies.map((job, index) => (
          <SingleJob key={index} job={job} />
        ))}
      </Grid>
    </React.Fragment>
  )
}

export { JobsList }
