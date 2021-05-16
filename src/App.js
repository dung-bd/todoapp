import React, {useState} from "react"
import TodoList from "./TodoList"
import TodoForm from "./TodoForm"
function App(){
  const[todoList, setTodoList] = useState([])
  function handleRemoveClick(todo){
    const newTodoList = todoList.filter((x)=>x.id !== todo.id)
    setTodoList(newTodoList)
  }
  function handleAddForm(formValues){
    console.log("Form submit: ", formValues)
    const newTodo={
      id: todoList.length + 1,
      ... formValues
    }
    const newTodoList = [... todoList]
    newTodoList.push(newTodo)
    setTodoList(newTodoList)
  }
    return(
      <div>
        <h1>Welcome to my todoApp</h1>
        <TodoForm onSubmit={handleAddForm}/>
        <TodoList todos={todoList} onTodoClick={handleRemoveClick} />
      </div>
    )
}
export default App