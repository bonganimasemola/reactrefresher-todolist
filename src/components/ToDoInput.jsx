import { useState } from "react";

function ToDoInput(props){
    const { handleAddToDos, todoValue, setTodoValue} = props
    

    return (
        <header>
            <input value = {todoValue} onChange={(e) => setTodoValue(e.target.value)} placeholder="Enter todo..."/>
            <button onClick={() => {handleAddToDos(todoValue)
            setTodoValue('')}}>
                Add
            </button>
        </header>
    );

    }

export default ToDoInput