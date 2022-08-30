import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addJobNote } from '../../redux/jobsSlice'
import { TWAddNoteBtn, TWAddNoteFooter, TWAddNoteTextarea } from './styles'

const AddNote = ({ jobID }) => {
  const dispatch = useDispatch()
  const [newNote, setNewNote] = useState('')

  const handleNewNote = (e) => {
    setNewNote(e.target.value)
  }

  const handleNoteSubmit = () => {
    if (newNote) {
        dispatch(addJobNote({
            jobID,
            newNote: {
                noteID: nanoid(),
                note: newNote
            }
        }))
        setNewNote('')
    }
  }

  return (
    <div>
        <TWAddNoteTextarea 
            cols="25" 
            rows="10" 
            placeholder='Add a note here...' 
            value={newNote} 
            onChange={handleNewNote}
        />
        <TWAddNoteFooter>
            <TWAddNoteBtn onClick={handleNoteSubmit}>Add Note</TWAddNoteBtn>
        </TWAddNoteFooter>
    </div>
  )
}

export default AddNote