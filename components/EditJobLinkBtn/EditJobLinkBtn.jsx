import React from 'react'
import Link from 'next/link'
import { TWAddIcon, TWBtn } from './styles'

const EditJobLinkBtn = ({ jobID }) => {
  return (
      <Link
          href={`jobs/${jobID}`}
      >
        <a>
          <TWBtn>
            <TWAddIcon size='1.8em' />
          </TWBtn>
        </a>
    </Link>
  )
}

export default EditJobLinkBtn