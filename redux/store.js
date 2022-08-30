import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from 'next-redux-wrapper'
import jobsReducer from './jobsSlice'

export const makeStore = () => configureStore({
    reducer: {
        jobs: jobsReducer
    },
    devTools: true
})

export const wrapper = createWrapper(makeStore)