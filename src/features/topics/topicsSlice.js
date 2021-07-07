import { createSlice } from '@reduxjs/toolkit'

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: { topics: {}},
    reducers: {
        addTopic: (state, action) => {
            const output = action.payload
            output.quizIds = []
            state.push(output)
        },
    }
})


export const selectInitialState = (state, action) => state.topics;
export const { addTopic } = topicsSlice.action;

export default topicsSlice.reducer;
