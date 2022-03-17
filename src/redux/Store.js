



import { configureStore } from "@reduxjs/toolkit";
// reducers
import CounterReducer from './CounterReducer'
import ToDoReducer from './ToDoReducer'


export default configureStore({
    reducer:{
        counter:CounterReducer,
        todo:ToDoReducer
    }
})

