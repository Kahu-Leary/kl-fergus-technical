import React from 'react'
import { TWDeleteIcon, TWBtn } from './styles'

const DeleteJobBtn = ({ deleteFunction }) => {
  return (
      <TWBtn onClick={deleteFunction}>
        <TWDeleteIcon size='1.8em' /> Delete Job
      </TWBtn>
  )
}

export default DeleteJobBtn 