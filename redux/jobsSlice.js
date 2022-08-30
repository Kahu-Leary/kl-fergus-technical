import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from 'next-redux-wrapper'

const initialState = [
    {
        jobID: 'LkR-34vHu5Baz6nruegrs',
        status: "active",
        creationDateAndTime: "05:35 PM - Friday, Aug 26 2022",
        clientName: "Jane Doe",
        contactDetails: {
            phoneNumber: "903892839",
            email: "johndoe@doe.com"
        },
        notes: [
            {
                noteID: '90901010An0x8xGpYY88',
                note: 'Jane is awesome'
            },
            {
                noteID: 'jksueKJHnAn0x8xGpYY88',
                note: 'Hi I am a note'
            },
        ]
    },
    {
        jobID: '6v8dnAnTY73k0yzGpYy5m',
        status: "scheduled",
        creationDateAndTime: "06:30 PM - Friday, Aug 26 2022",
        clientName: "John Doe",
        contactDetails: {
            phoneNumber: "903892839",
            email: "johndoe@doe.com"
        },
        notes: []
    },
    {
        jobID: '8888nAnTY73k0yzGpYy5m',
        status: "invoicing",
        creationDateAndTime: "07:30 PM - Friday, Aug 26 2022",
        clientName: "Lisa Reynolds",
        contactDetails: {
            phoneNumber: "903892839",
            email: "lisa@useruser.com"
        },
        notes: []    
    },
    {
        jobID: '6v8dnAnTY73k0yzGpYY88',
        status: "to priced",
        creationDateAndTime: "07:30 PM - Saturday, Aug 27 2022",
        clientName: "David Blur",
        contactDetails: {
            phoneNumber: "903892839",
            email: "daveisacat@xtra.co.nz"
        },
        notes: [
            {
                noteID: '9090v8923n0x8xGpYY88',
                note: ''
            },
        ]    
    },
    {
        jobID: '6v8dnAnTY73k0x8xGpYY88',
        status: "completed",
        creationDateAndTime: "07:00 PM - Sunday, Aug 28 2022",
        clientName: "April Rose",
        contactDetails: {
            phoneNumber: "903892839",
            email: "april@user.com"
        },
        notes: [
            {
                noteID: '9090v8dnAn0x8xGpYY88',
                note: 'April task complete'
            },
        ]    
    },
]

const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        jobAdded(state, action) {
            state.push(action.payload)
        },
        jobRemoved(state, { payload }) {
            return state = state.filter(({ jobID }) => jobID !== payload)
        },
        jobEdited(state, { payload }) {
            state.map(job => {
                if (job.jobID === payload.jobID) {
                    state[state.indexOf(job)] = payload
                }
            })
        },
        addJobNote(state, { payload }) {
            const associatedJob = state.find(job => job.jobID === payload.jobID)
            associatedJob.notes.push(payload.newNote)
        },
        deleteJobNote(state, { payload }) {
            const associatedJob = state.find(job => job.jobID === payload.jobID)
            const updatedNotes = associatedJob.notes.filter(note => note.noteID !== payload.noteID)
            associatedJob.notes = updatedNotes
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            console.log('HYDRATE', action.payload);
            return [
                ...state,
            ]
        }
    },
});

export const selectAllJobs = state => state.jobs;
export const selectJobById = (state, jobId) => state.find(job => job.jobID === jobId);
export const { jobAdded, jobRemoved, jobEdited, addJobNote, deleteJobNote } = jobsSlice.actions

export default jobsSlice.reducer