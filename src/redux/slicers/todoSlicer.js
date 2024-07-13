import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { addTodoReducer, removeTodoReducer, builder_fetchTodos_pending } from '../reducers/todoReducer'
import { ACTIONS } from '../actions/todoActions'

const initialState = {
    data: {
        todos: [
            {   id: 1, title: "hello"    }]
        },
    isError: false,
    isLoading: true
}

// Reducer - written in reducers

// Actions - 

// Slicer
export const todoSlice = createSlice({
    name: 'todo', 
    initialState, 
    reducers: {
        addTodo: addTodoReducer,
        removeTodo: removeTodoReducer,
    },
    extraReducers: (builder) => {
        builder.addCase(ACTIONS.FETCH_TODOS.pending, builder_fetchTodos_pending);
        builder.addCase(ACTIONS.FETCH_TODOS.fulfilled, (state, action) => {
            state.isLoading = false
            state.data.todos = action.payload
            console.log("Printing todos")
            console.log(state.data.todos)
        });
        builder.addCase(ACTIONS.FETCH_TODOS.rejected, (state, action) => {
            console.log("error" + action.payload)
            state.isError = true
        })
    }
});


export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer