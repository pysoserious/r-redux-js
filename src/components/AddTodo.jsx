import React, { Component, useState } from "react";
import  {useDispatch} from 'react-redux'
import { addTodo } from "../redux/slicers/todoSlicer";


// class AddTodo extends Component {

//     render() {
//         <div>
//             AddTodo
//         </div>
//     }
// }


function AddTodo() {

    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput()
    }

    return (
        <form onSubmit={addTodoHandler} className="space-x-3-mt-12">
            <input
            type="text" placeholder="Enter a ToDo..." onChange={(e) => setInput(e.target.value)}>
            </input>
        </form>
    );

}

export default AddTodo;