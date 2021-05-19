import React from "react"


function TodoList(props){
    const{todos, onTodoClick,handleComplete} = props
    
    // const handleClick=useCallback((todo)=>{
    //     if(onTodoClick){
    //         onTodoClick(todo)
    //     }
    // },[onTodoClick])
    function handleClick(todo){
        if(onTodoClick){
            onTodoClick(todo)
        }
    }
    
    
    return(
        <ul className="todo-list">
            {todos.map(todo=>(
                <div className="todo-list-item">
                <li key={todo.id}>{todo.name}</li>
                <button onClick={() => handleClick(todo)}>Delete</button>
                <button onClick={()=>{handleComplete(todo.id)}}>complete</button>
        
                </div>
            ))}
        </ul>
    )
}

export default TodoList