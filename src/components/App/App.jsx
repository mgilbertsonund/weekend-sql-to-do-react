import {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import TodoList from './Todos/TodoList.jsx';


function App () { 

  return (
    <div>
      <header>To Do App</header>
      <TodoList />
    </div>
  );

}

export default App;
