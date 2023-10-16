import { createSlice } from '@reduxjs/toolkit'
import data from './db'


const initialState = {
    apiData: {},
    apiDataArray: data.data1,
    headers: [],
    filteredData: []
}

export const slice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        ADD_DATA: (state, action) => {
            state.apiData = action.payload
        },
        SET_FILTERED_DATA(state, action) {
            state.filteredData = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { ADD_DATA, SET_HEADERS, SET_FILTERED_DATA } = slice.actions

export default slice.reducer