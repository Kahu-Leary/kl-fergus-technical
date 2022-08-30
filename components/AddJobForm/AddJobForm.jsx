import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { jobAdded } from '../../redux/jobsSlice'
import { TWCloseBtn, TWForm, TWFormTitle, TWInput, TWSelect, TWFormSubmitBtn } from './styles'

const AddJobForm = ({ setShowModal }) => {
  const dispatch = useDispatch()

  const [jobStatus, setJobStatus] = useState('scheduled')
  const [clientName, setClientName] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [clientPhoneNumber, setClientPhoneNumber] = useState('')
  const [isValid, setIsValid] = useState(true)

  const onJobStatusChange = e => setJobStatus(e.target.value)
  const onClientNameChange = e => setClientName(e.target.value)
  const onClientEmailChange = e => setClientEmail(e.target.value)
  const onClientPhoneNumberChange = e => setClientPhoneNumber(e.target.value)

  const validateEmail = () => {
    // eslint-disable-next-line
    const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    const email = clientEmail
    const result = validEmailRegex.test(email) 
    return result ? true : false
  }

  const formatTime = (date) => {
    const hours12 = date.getHours() % 12 || 12
    const minutes = date.getMinutes()
    const isAm = date.getHours() < 12

    return `${hours12.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${isAm ? 'AM' : 'PM'}`
  }
  const formatDate = (date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`
  }

  const onJobSaved = e => {
    e.preventDefault()
    const date = new Date()
    const dateResult = `${formatTime(date)} - ${formatDate(date)}`

    if (jobStatus && clientName && clientEmail && clientPhoneNumber) {
        if (validateEmail()) {
            setIsValid(true)
            dispatch(
                jobAdded({
                    jobID: nanoid(),
                    status: jobStatus,
                    creationDateAndTime: dateResult,
                    clientName: clientName,
                    contactDetails: {
                        clientEmail,
                        clientPhoneNumber,
                    },
                    notes: []
                })
            )

            setJobStatus('scheduled')
            setClientName('')
            setClientEmail('')
            setClientPhoneNumber('')
            setShowModal(false)
        } else {
            if (isValid) alert('Please check all fields are correct\nNOTE: email must contain a valid email pattern value such as test@test.com')
        }
    } else {
        alert('Please fill all fields')
    }
  }

  return (
    <div>
        <br/>
        <TWFormTitle>Add a new job</TWFormTitle>
        <TWCloseBtn onClick={() => {setShowModal(false)}}/>
        <TWForm>
            <label htmlFor="clientName">Client Name: </label>
            <br/>
            <TWInput 
                type="text" 
                id='clientName'
                name='clientName'
                value={clientName}
                onChange={onClientNameChange}
            />
            <br/>
            <br/>
            <label htmlFor="clientEmail">Email: </label>
            <br/>
            <TWInput 
                type="text" 
                id='clientEmail'
                name='clientEmail'
                value={clientEmail}
                onChange={onClientEmailChange}
            />
            <br/>
            <br/>
            <label htmlFor="clientName">Phone Number: </label>
            <br/>
            <TWInput 
                type="text" 
                id='phoneNumber'
                name='phoneNumber'
                value={clientPhoneNumber}
                onChange={onClientPhoneNumberChange}
            />
            <br/>
            <br/>
            <label htmlFor="jobStatus">Status: </label>
            <br/>
            <TWSelect name="jobStatus" id="jobStatus" value={jobStatus} onChange={onJobStatusChange}>
                <option value="scheduled">scheduled</option>
                <option value="to priced">to priced</option>
                <option value="invoicing">invoicing</option>
                <option value="active">active</option>
                <option value="completed">completed</option>
            </TWSelect>
            <br/>
            <br/>
            <TWFormSubmitBtn onClick={onJobSaved}>Submit</TWFormSubmitBtn>
        </TWForm>
    </div>
  )
}

export default AddJobForm