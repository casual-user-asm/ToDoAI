import { configureStore } from '@reduxjs/toolkit'
import taskSlice from './slices/taskSlice'
import gptSlice from './slices/gptSlice'

const store = configureStore({
    reducer: {
        task: taskSlice,
        gpt: gptSlice,
    },
})
export default store
