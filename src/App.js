import React, {useState} from "react"
import TodoList from "./TodoList"
import TodoForm from "./TodoForm"
import './App.scss'
class Task {
  constructor(id,name,isComplete){
      this.id=id
      this.name=name
      this.isComplete=isComplete
  }
  complete(){
    this.isComplete=true
  }
  setName(name){
    this.name=name
  }
}
function App(){
  const[todoList, setTodoList] = useState([])
  function handleRemoveClick(todo){
    const newTodoList = todoList.filter((x)=>x.id !== todo.id)
    setTodoList(newTodoList)
  }
  function handleComplete(id){
    setTodoList((state)=>{
        return state.map((todo)=>{
            if(todo.id === id){
              todo.complete()
            
              
            }
            return todo
          })
           
    })
  }
 
  function handleAddForm(formValues){
    console.log("Form submit: ", formValues)
    const newTodo=new Task(todoList.length + 1,formValues.title,false)
    const newTodoList = [... todoList]
    newTodoList.push(newTodo)
    setTodoList(newTodoList)
  }
    return(
      <div className="App">
        <h1>Welcome to my todoApp</h1>
        <TodoForm onSubmit={handleAddForm}/>
        <p>doing</p>
        <TodoList todos={todoList.filter(e=>!e.isComplete)} onTodoClick={handleRemoveClick} handleComplete={handleComplete} />
        <p>complete</p>
        <TodoList todos={todoList.filter(e=>e.isComplete)} onTodoClick={handleRemoveClick} />
      </div>
    )
}
export default App