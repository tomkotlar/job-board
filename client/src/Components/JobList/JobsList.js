import React from "react"
import SingleJob from '../SingleJob/SingleJob'

const JobsList = ({ vacancies }) => {
  return (
    <div>
      {vacancies.map((job, index) => (
       <SingleJob  key={job.id} job={job} />
      ))}
    </div>
  )
}

export default JobsList
