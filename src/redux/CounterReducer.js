

import { createSlice } from "@reduxjs/toolkit";

export const CounterReducer = createSlice({

    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        increase: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        }
    }
})

export const {increase,decrement} = CounterReducer.actions
export const selecCounter = (state) => state.counter.value
export default CounterReducer.reducer