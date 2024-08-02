import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        add_task(state, action) {
            state.push(action.payload)
        },
        complete_task(state, action) {
            return state.filter((el) => {
                return el !== action.payload
            })
        },
        delete_task(state, action) {
            return state.filter((el) => {
                return el !== action.payload
            })
        },
    },
})

export const { add_task, complete_task, delete_task } = taskSlice.actions
export default taskSlice.reducer
