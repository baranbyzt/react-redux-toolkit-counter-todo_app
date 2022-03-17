
import { createSlice } from "@reduxjs/toolkit";

export const ToDoReducer = createSlice({
    name: 'todo',
    initialState:{
        value:[
            {name:'Barney Stinson'}
        ]
    },
    reducers: {
        addTodo: (state,action) => {
            state.value.push({name: action.payload.name})
        }
    }
})

export const selectTodos = state => state.todo.value;
export const {addTodo} = ToDoReducer.actions;
export default ToDoReducer.reducer;