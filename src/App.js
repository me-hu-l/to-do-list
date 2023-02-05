import logo from './logo.svg';
import './App.css';
import React from 'react';

const App = () => {
  
  const [todos_list, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");


  function handleSubmit(e){
    e.preventDefault();
    console.log(e.target.value);
    console.log("handle Submit invoked");
    const newTodo = {
      id: new Date().getTime(),
      text:todo.trim(),
      completed: false
    };
    //const newTodos = [...todos_list].concat(newTodo);
    if (newTodo.text.length > 0 ) {
      setTodos([...todos_list].concat(newTodo));
      setTodo("");
  
  } else {
      
      alert("Enter Valid Task");
      setTodo(""); 
  }
  console.log(todos_list);
}

  function toggleComplete(id){
    const newTodos = [...todos_list].map((todo) => {
      if (todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    })
    setTodos(newTodos);
  }
  function handleDelete(id){
    setTodos([...todos_list].filter(todo => todo.id !== id));
  }

  function submitEdits(id){
        const newTodos = [...todos_list].map( todo => {
                if(todo.id === id){
                        todo.text = editingText;
                }
                return todo;
        })
        setTodos(newTodos);
        setTodoEditing(null);
  }

  return (
    <div className='App'>
      <header className='App-header'>
      <img src= {logo} height="200" className='App-logo'/>
       <h1>Todo List</h1>
       <form onSubmit={handleSubmit} className='input-form'>
        <input type ="text" className='current-input' onChange={(event)=> setTodo(event.target.value)} value = {todo} placeholder="Add a new task" />
        <button type='submit' className='btn'> Add Todo</button> 
       </form>
       {() => console.log(todos_list)}
       <ul>
           {todos_list.map( todo => (
                (<li className='list-item'>
                        <div className='list-item-text'>
                        <input type = "checkbox" checked={todo.completed} onChange= {() => toggleComplete(todo.id)} />
                        
                        {todo.id === (todoEditing)?(
                                <input type="text" onChange={(e) => setEditingText(e.target.value)} />
                        ):(todo.text)}
                        </div>
                        <div>
                        {todo.id === (todoEditing) ?(
                                <button onClick={() => submitEdits(todo.id)} className='btn'> Submit Edits</button>
                        ):(
                                <button onClick={() => setTodoEditing(todo.id)} className='btn'>Edit</button>
                        )}
                        
                        <button onClick={() => handleDelete(todo.id)} className='btn' id=''>Delete</button>
                        </div>
                </li>)
           ))}
       </ul>
       
       </header>
       
    </div>
  )
}

export default App;
