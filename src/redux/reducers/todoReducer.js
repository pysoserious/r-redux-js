import { nanoid } from '@reduxjs/toolkit'

export const addTodoReducer = (state, action) => {
    console.log("Action Payload " + action.payload)
    const todo = {
        id: nanoid(),
        title: action.payload // paload can be text or object
    }
    // update state
    state.data.todos.push(todo)
}

export const removeTodoReducer = (state, action) => {
    const todo = {
        id: nanoid(),
        title: action.payload // paload can be text or object
    }
    // update state
    state.data.todos = state.data.todos.filter((todo) => todo.id !== action.payload )
}


export const builder_fetchTodos_pending = (state, action) => {
    state.isLoading = true
}