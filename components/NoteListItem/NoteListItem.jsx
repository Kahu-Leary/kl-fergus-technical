import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteJobNote } from '../../redux/jobsSlice'
import { TWDeleteIcon, TWNoteListCard, TWNoteListItemDelete } from './styles'

function NoteListItem({ jobID, note }) {
  const dispatch = useDispatch()
  
  const handleNoteDelete = () => {
    dispatch(deleteJobNote({
        jobID,
        noteID: note.noteID,
    }))
  }
  return (
    <>
      {(note.note !== '') &&
        <TWNoteListCard>
            <TWNoteListItemDelete onClick={handleNoteDelete}>
                <TWDeleteIcon size='1.5em' />
            </TWNoteListItemDelete>
            <p>
              {note.note}
            </p>
        </TWNoteListCard>
      }
    </>
  )
}

export default NoteListItem