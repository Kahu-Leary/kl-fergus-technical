import React, { useState, useEffect } from 'react'
import EditJobLinkBtn from '../EditJobLinkBtn'
import DeleteJobBtn from '../DeleteJobBtn'
import { TWJobDataHighlight, TWJobListCard } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { selectJobById, selectAllJobs, jobRemoved } from '../../redux/jobsSlice'

function JobListItem({ jobID, jobStatus, jobClientName, jobCreationDateAndTime }) {
    const [statusColor, setStatusColor] = useState('text-orange-400')
    const dispatch = useDispatch()

    useEffect(() => {
        if (jobStatus === 'scheduled') setStatusColor('text-yellow-400')
        if (jobStatus === 'active') setStatusColor('text-red-400')
        if (jobStatus === 'invoicing') setStatusColor('text-purple-400')
        if (jobStatus === 'to priced') setStatusColor('text-blue-400')
        if (jobStatus === 'completed') setStatusColor('text-lime-400')
    }, [jobStatus])
    
  return (
    <TWJobListCard>
        <small>Job ID : <TWJobDataHighlight color='text-cyan-400'>{jobID}</TWJobDataHighlight></small>
        <h3>
            <TWJobDataHighlight color={statusColor}>
                {jobStatus}
            </TWJobDataHighlight>
        </h3>
        <h3>
            <TWJobDataHighlight>
                {jobClientName}
            </TWJobDataHighlight>
        </h3>
        <small>Created on: </small>
        <br/>
        <small>{jobCreationDateAndTime}</small>
        <EditJobLinkBtn jobID={jobID} />
            <DeleteJobBtn deleteFunction={() => dispatch(jobRemoved(jobID))
}/>
    </TWJobListCard>
  )
}

export default JobListItem