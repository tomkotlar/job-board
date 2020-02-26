import React from 'react'

export const SingleJob = ({job}) => (
        <div>
            <p>{job.title}</p> 
            <p>{job.company}</p> 
        </div>
    )


// export default SingleJob