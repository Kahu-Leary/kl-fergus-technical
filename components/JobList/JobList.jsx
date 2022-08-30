import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllJobs } from '../../redux/jobsSlice'
import JobListItem from '../JobListItem'
import { TWListContainer } from './styles'

const JobList = ({ search }) => {
  const jobs = useSelector(selectAllJobs)

  return (
    <TWListContainer>
      {jobs.filter(job => {
          if (search === ''){
            return job
          } 
          if (
            job.clientName.toLowerCase().includes(search.toLowerCase()) ||
            job.status.toLowerCase().includes(search.toLowerCase()) ||
            job.creationDateAndTime.toLowerCase().includes(search.toLowerCase()) ||
            job.jobID.toLowerCase().includes(search.toLowerCase())
          ) {
            return job
          }
        }).map(job => (
          <JobListItem 
            key={job.jobID} 
            jobID={job.jobID} 
            jobStatus={job.status} 
            jobClientName={job.clientName} 
            jobCreationDateAndTime={job.creationDateAndTime} 
          />
        ))}
    </TWListContainer>
  )
}

export default JobList
