import {createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


const totdosUrls = "https://jsonplaceholder.typicode.com/todos"

const fetchTodos = createAsyncThunk("fetchTodos", async () => {

    try{
        const response = await axios.get(totdosUrls);
        console.log(response.data)
        return [...response.data];
    }
    catch(error){
        return error.message;
    }
})

export const ACTIONS = {
    "FETCH_TODOS": fetchTodos
}

