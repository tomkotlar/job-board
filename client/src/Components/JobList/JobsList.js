import React from "react"
import {SingleJob} from '../SingleJob/SingleJob'

export const JobsList = ({ vacancies }) => (
    <div>
      {vacancies.map((job, index) => (
       <SingleJob  key={job.id} job={job} />
      ))}
    </div>
)


