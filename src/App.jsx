import ToDoInput from "./components/ToDoInput";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";


function App() {


const [todos, setTodos] = useState([]);
const [todoValue, setTodoValue] = useState('')

function persistData(newList){
  localStorage.setItem('todos', JSON.stringify({todos: newList }))
}

function handleAddToDos(newTodo){
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
}

function handleDeleteTodo(index){
  const newTodoList = todos.filter((todo, todoIndex)=> {
    return todoIndex !== index
  })
  persistData(newTodoList)
  setTodos(newTodoList)
}

function handleEditTodo(index) {
  const valueToBeEdited = todos[index]
  setTodoValue(valueToBeEdited)
  handleDeleteTodo(index)
}


  useEffect(()=> {
    if (!localStorage) {
      return 
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return 
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, [])
  
  return (
    <>
      <ToDoInput  todoValue={todoValue} setTodoValue={setTodoValue} handleAddToDos={handleAddToDos}/>
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />
    </>
  )
}

export default App
