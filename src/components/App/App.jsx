import {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import TodoList from './Todos/TodoList.jsx';


function App () { 

  return (
    <div>
      <header>todo App</header>
      <TodoList />

    </div>
  );

}

export default App;
