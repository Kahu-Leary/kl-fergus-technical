import React from 'react'
import NoteListItem from '../NoteListItem'
import { TWListContainer } from './styles'

const NoteList = ({ jobID, notes }) => {

  return (
    <>
        <TWListContainer>
            {notes.map(note => (
                <NoteListItem 
                  key={note.noteID} 
                  jobID={jobID}
                  note={note}
                />
              ))}
        </TWListContainer>
    </>
  )
}

export default NoteList 
