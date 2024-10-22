import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import OpenAI from 'openai'

const initialState = {
    gptResponse: '',
    status: '',
    error: null,
}

const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_KEY,
    dangerouslyAllowBrowser: true,
})

export const fetchAI = createAsyncThunk(
    'tasks/fetchAI',
    async (query, thunkAPI) => {
        try {
            const completion = await openai.chat.completions.create({
                messages: [
                    {
                        role: 'system',
                        content:
                            'You are a helpful assistant that help me with my tasks.',
                    },
                    { role: 'user', content: query },
                ],
                model: 'gpt-4o-mini',
            })

            return completion.choices[0].message.content
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const gptSlice = createSlice({
    name: 'gpt',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAI.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchAI.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.gptResponse = action.payload
            })
            .addCase(fetchAI.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    },
})

export default gptSlice.reducer
