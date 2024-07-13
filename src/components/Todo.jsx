import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from '../redux/slicers/todoSlicer'
import { useEffect } from "react";
import { ACTIONS } from "../redux/actions/todoActions";

function Todos() {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.data.todos)
    const todos_isLoading = useSelector((state) => state.isLoading)
    const todos_error = useSelector((state) => state.isError)

    console.log("State", todos)

    useEffect(() => {
        if(todos_isLoading === true){
            console.log("fetching todos")
            dispatch(ACTIONS.FETCH_TODOS())
        }
    }, [todos_isLoading, dispatch])


    let content;
    if (todos_isLoading === true) {
        console.log("checking is loading true")
        console.log(todos_isLoading)
        content = <div>Loading...</div>
    }
    else if (todos_isLoading === false) {
        console.log("checking is loading false")
        console.log(todos_isLoading)
        content = <div>{todos.map((todo) => (
            <li ley={todo.id}>
                {todo.title}
                <button onClick={
                    () => dispatch(removeTodo(todo.id))
                }>X</button>
            </li>
        ))}
        </div>
    }

    return (
        <>
        <div>
            Todos
        </div>
        {/* <div>
            <button onClick={e => dispatch(fetchTodos())}>Fetch Todods</button>
        </div> */}
        {content}
        </>
    )
}

export default Todos;