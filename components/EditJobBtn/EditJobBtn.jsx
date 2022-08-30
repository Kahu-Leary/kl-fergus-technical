import React from 'react'
import { TWAddIcon, TWBtn } from './styles'

const EditJobBtn = ({ editFunction, children }) => {
  return (
      <TWBtn onClick={editFunction}>
        <TWAddIcon size='1.8em' /> {children}
      </TWBtn>
  )
}

export default EditJobBtn 