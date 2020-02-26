import React from 'react'

const SingleJob = ({job}) => {
    return (
        <div>
            <p>{job.title}</p> 
            <p>{job.company}</p> 
        </div>
    )
}

export default SingleJob