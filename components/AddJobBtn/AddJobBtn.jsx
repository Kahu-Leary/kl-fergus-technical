import React from 'react'
import { TWAddIcon, TWBtn } from './styles'

const AddJobBtn = ({ showModal, setShowModal }) => {
  return (
    <TWBtn onClick={() => setShowModal(!showModal)}>
        <TWAddIcon size='1.8em' />
    </TWBtn>
  )
}

export default AddJobBtn