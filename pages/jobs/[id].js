import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'

import { jobEdited, selectJobById} from '../../redux/jobsSlice'
import { TWJobDataHighlight } from '../../components/JobListItem/styles'
import { TWSingleJobBackBtn, TWJobDetailsContainer, TWJobDetails, TWJobPageContainer } from '../../components/StylesBase'

import { AddNote, EditJobBtn, NoteList } from '../../components'

function SingleJob() {
  const router = useRouter()
  const dispatch = useDispatch()
  const job = useSelector(state => selectJobById(state.jobs, router.query.id))
  const [statusColor, setStatusColor] = useState('text-orange-400')
  const [isEditable, setIsEditable] = useState(false)


  const [jobStatus, setJobStatus] = useState(job.status)
  const [clientName, setClientName] = useState(job.clientName)
  const [clientEmail, setClientEmail] = useState(job.contactDetails.email)
  const [clientPhoneNumber, setClientPhoneNumber] = useState(job.contactDetails.phoneNumber)

  const onJobStatusChange = e => setJobStatus(e.target.value)
  const onClientNameChange = e => setClientName(e.target.value)
  const onClientEmailChange = e => setClientEmail(e.target.value)
  const onClientPhoneNumberChange = e => setClientPhoneNumber(e.target.value)

  // useEffect(() => {
    // setJobStatus(job.status)
    // setClientName(job.clientName)
    // setClientEmail(job.clientEmail)
    // setClientPhoneNumber(job.clientPhoneNumber)

  // }, [])

  useEffect(() => {
      if (job.status === 'scheduled') setStatusColor('text-yellow-400')
      if (job.status === 'active') setStatusColor('text-red-400')
      if (job.status === 'invoicing') setStatusColor('text-purple-400')
      if (job.status === 'to priced') setStatusColor('text-blue-400')
      if (job.status === 'completed') setStatusColor('text-lime-400')
  }, [job.status])

  const handleEdit = () => {
    setIsEditable(!isEditable)
  }
  const handleSave = () => {
    setIsEditable(!isEditable)

    if (jobStatus && clientName && clientEmail && clientPhoneNumber) {
        dispatch(
            jobEdited({
                jobID: job.jobID,
                status: jobStatus,
                creationDateAndTime: job.creationDateAndTime,
                clientName: clientName,
                contactDetails: {
                    email: clientEmail,
                    phoneNumber: clientPhoneNumber,
                },
                notes: [...job.notes]
            })
        )

    } else {
        alert('Please fill all fields')
    }
  }
  
  return (
    <>
        <TWJobPageContainer>

          <TWJobDetailsContainer>
            <TWSingleJobBackBtn onClick={() => router.push('/')}>Back to home screen</TWSingleJobBackBtn>
              <div>
                Job ID:<br/><TWJobDataHighlight color='text-cyan-400'>{job.jobID}</TWJobDataHighlight>
              </div>
              {!isEditable &&
                <>
                  <div>
                    Status:<br/><TWJobDataHighlight color={statusColor}>{job.status}</TWJobDataHighlight>
                  </div>
                  <div>Client Name:<br/> {job.clientName}</div>
                  <div>Email:<br/> {job.contactDetails.email}</div>
                  <div>Phone Number:<br/> {job.contactDetails.phoneNumber}</div>
                </>
              }
              {isEditable && 
                <>
                  <div>
                      <label htmlFor="jobStatus">Status: </label>
                      <br/>
                      <select name="jobStatus" id="jobStatus" value={jobStatus} onChange={onJobStatusChange}>
                          <option value="scheduled">scheduled</option>
                          <option value="to priced">to priced</option>
                          <option value="invoicing">invoicing</option>
                          <option value="active">active</option>
                          <option value="completed">completed</option>
                      </select>
                  </div>
                  <div> 
                      <label htmlFor="clientName">Client Name: </label>
                      <br/>
                      <input 
                          type="text" 
                          id='clientName'
                          name='clientName'
                          value={clientName}
                          onChange={onClientNameChange}
                      />
                  </div>
                  <div>
                      <label htmlFor="clientEmail">Email:</label>
                      <br/>
                      <input 
                          type="text" 
                          id='clientEmail'
                          name='clientEmail'
                          value={clientEmail}
                          onChange={onClientEmailChange}
                      />
                  </div>
                  <div>
                      <label htmlFor="clientName">Phone Number:</label>
                      <br/>
                      <input 
                          type="text" 
                          id='phoneNumber'
                          name='phoneNumber'
                          value={clientPhoneNumber}
                          onChange={onClientPhoneNumberChange}
                      />
                  </div>
                </>
              }
            <div>
              Created on: <TWJobDetails>{job.creationDateAndTime}</TWJobDetails>
            </div>

          </TWJobDetailsContainer>
          <TWJobDetailsContainer>
            <EditJobBtn editFunction={!isEditable ? (()  => handleEdit()) : (() => handleSave())}>
              {!isEditable && <>Edit Job</>}
              {isEditable && <>Save Changes</>}
            </EditJobBtn>
          </TWJobDetailsContainer>

          <TWJobDetailsContainer>
            <AddNote jobID={job.jobID} />
          </TWJobDetailsContainer>
          <NoteList jobID={job.jobID} notes={job.notes} />

        </TWJobPageContainer>
    </>
  )
}

export default SingleJob