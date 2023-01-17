import logo from './logo.svg';
import './App.css';
import React from 'react';

const App = () => {
  console.log("App component rendered");
  const [todos_list, setTodos] = React.useState(["getting intern", "getting job","hello"]);//todos_list state is the list of current todos
  const [todo, setTodo] = React.useState("");
  //todo shows the current todo 
  //setTodos(["getting intern", "getting job"]);
  //each todo will be a object having id as time it is formed, text and whether it is completed

  function handleSubmit(){
    
  }

  return (
    <div className='App'>
      <header className='App-header'>
      <img src= {logo} height="200" className='App-logo'/>
       <h1>Todo List</h1>
       <form>
        <input type ="text" />
        <button type='submit'> Add Todo</button>
       </form>
       <ul>
       {todos_list.map(todo =>  <li className='list-item'>{todo}</li>)}
       </ul>
       </header>
       
    </div>
  )
}

export default App;
