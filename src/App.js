import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  
  function addTodo(content){

    const todo = {
      id: crypto.randomUUID(), //Api Web permet de nous donner une id unique
      content,
      done: false, /*todo pas réalisé*/
      edit: false /*todo pas modifiable*/
    };
    setTodoList([...todoList, todo]);
  }
  return (
    <div className="d-flex justify-content-center align-items-center p-20">
      <div className="card container p-20">
        <h1 className="mb-20">Todo List</h1>
        <AddTodo addTodo = { addTodo }/>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
