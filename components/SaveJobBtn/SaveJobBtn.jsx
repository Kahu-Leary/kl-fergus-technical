import React from 'react'
import { TWSaveIcon, TWSaveBtn } from './styles'

const SaveJobBtn = ({ children }) => {
  return (
      <TWSaveBtn>
        <TWSaveIcon size='1.8em' /> {children}
      </TWSaveBtn>
  )
}

export default SaveJobBtn  